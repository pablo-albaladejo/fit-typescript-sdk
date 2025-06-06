import * as fs from 'fs';
import CRC16 from './CRC16';
import Fit from './Fit';
import FitRuntimeException from './FitRuntimeException';
import Mesg from './Mesg';
import MesgDefinition from './MesgDefinition';
import MesgDefinitionListener from './MesgDefinitionListener';
import MesgListener from './MesgListener';
import ProtocolValidator from './ProtocolValidator';
import ProtocolValidatorFactory from './ProtocolValidatorFactory';
import ProtocolVersion from './ProtocolVersion';

export class FileEncoder implements MesgListener, MesgDefinitionListener {
  private file: fs.PathLike;
  private out: fs.WriteStream;
  private rawWrite: (chunk: Buffer | string) => boolean;
  private crcOut: { write: (chunk: Buffer | string | number) => void };
  private crc16: CRC16;
  private lastMesgDefinition: MesgDefinition[] = new Array(Fit.MAX_LOCAL_MESGS);
  private version: ProtocolVersion;
  private validator: ProtocolValidator;

  constructor(file: fs.PathLike, version: ProtocolVersion) {
    this.version = version;
    this.validator = ProtocolValidatorFactory.getProtocolValidator(version);

    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
    fs.writeFileSync(file, '');
    this.crc16 = new CRC16();
    this.file = file;

    this.writeFileHeader();
    try {
      this.out = fs.createWriteStream(this.file, { flags: 'a' });
      this.rawWrite = this.out.write.bind(this.out);
      this.crcOut = {
        write: (chunk: Buffer | string | number): void => {
          const buf =
            typeof chunk === 'number'
              ? Buffer.from([chunk])
              : Buffer.isBuffer(chunk)
              ? chunk
              : Buffer.from(chunk);
          this.crc16.update(buf, 0, buf.length);
          this.rawWrite(buf);
        },
      };
      this.out.on('error', (err) => {
        throw new FitRuntimeException(err);
      });
      this.out.on('finish', () => {
        this.out.close();
      });
    } catch (e) {
      throw new FitRuntimeException(e);
    }
  }

  open(_file: fs.PathLike): void {}

  writeFileHeader(): void {
    if (!this.file) {
      throw new FitRuntimeException('File not open.');
    }

    try {
      const crc = new CRC16();
      const raf = fs.openSync(this.file, 'r+');
      let dataSize = fs.statSync(this.file).size - Fit.FILE_HDR_SIZE;
      let crcValue = 0;

      if (dataSize < 0) {
        dataSize = 0;
      }

      const header = Buffer.from([
        Fit.FILE_HDR_SIZE,
        this.version.getVersion(),
        Fit.PROFILE_VERSION & 0xff,
        Fit.PROFILE_VERSION >> 8,
        dataSize & 0xff,
        (dataSize >> 8) & 0xff,
        (dataSize >> 16) & 0xff,
        (dataSize >> 24) & 0xff,
        '.'.charCodeAt(0),
        'F'.charCodeAt(0),
        'I'.charCodeAt(0),
        'T'.charCodeAt(0),
      ]);

      fs.writeSync(raf, header);
      crc.update(header, 0, header.length);
      crcValue = crc.getValue();

      const crcBuffer = Buffer.from([crcValue & 0xff, (crcValue >> 8) & 0xff]);
      fs.writeSync(raf, crcBuffer);

      fs.closeSync(raf);
    } catch (e) {
      throw new FitRuntimeException(e);
    }
  }

  onMesg(mesg: Mesg): void {
    this.writeMesg(mesg);
  }

  onMesgDefinition(mesgDefinition: MesgDefinition): void {
    this.writeMesgDefinition(mesgDefinition);
  }

  writeMesgDefinition(mesgDefinition: MesgDefinition): void {
    if (!this.file) {
      throw new FitRuntimeException('File not open.');
    }

    if (!this.validator.validateMesgDefn(mesgDefinition)) {
      throw new FitRuntimeException('Incompatible Protocol Features');
    }

    mesgDefinition.write(this.crcOut);
    this.lastMesgDefinition[mesgDefinition.localNum] = mesgDefinition;
  }

  writeMesg(mesg: Mesg): void {
    if (!this.file) {
      throw new FitRuntimeException('File not open.');
    }

    if (!this.validator.validateMesg(mesg)) {
      throw new FitRuntimeException('Incompatible Protocol Features');
    }

    const localNum = mesg.getLocalNum();

    if (
      !this.lastMesgDefinition[localNum] ||
      !this.lastMesgDefinition[localNum].supports(new MesgDefinition(mesg))
    ) {
      this.writeMesgDefinition(new MesgDefinition(mesg));
    }

    mesg.write(this.crcOut, this.lastMesgDefinition[localNum]);
  }

  writeMesgArr(mesgs: Mesg[]): void {
    for (const mesg of mesgs) {
      this.writeMesg(mesg);
    }
  }

  close(): void {
    if (!this.file) {
      throw new FitRuntimeException('File not open.');
    }

    try {
      this.writeFileHeader();

      const crc = this.crc16.getValue();
      const crcBuffer = Buffer.from([crc & 0xff, (crc >> 8) & 0xff]);
      fs.appendFileSync(this.file, crcBuffer);

      this.out.close();
    } catch (e) {
      throw new FitRuntimeException(e);
    }
  }
}

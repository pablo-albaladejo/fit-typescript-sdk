import * as fs from 'fs';
import CRC16 from './CRC16';
import Fit from './Fit';
import FitRuntimeException from './FitRuntimeException';

export interface FitHeader {
  headerSize: number;
  protocolVersion: number;
  profileVersion: number;
  dataSize: number;
  dataType: string;
  crc: number;
}

export default class FileDecoder {
  private buffer: Buffer;
  private header: FitHeader | null = null;

  constructor(file: fs.PathLike | Buffer) {
    this.buffer = Buffer.isBuffer(file) ? file : fs.readFileSync(file);
  }

  readHeader(): FitHeader {
    if (this.header) return this.header;
    if (this.buffer.length < Fit.FILE_HDR_SIZE) {
      throw new FitRuntimeException('Invalid FIT file');
    }

    const size = this.buffer[0];
    const protoVer = this.buffer[1];
    const profVer = this.buffer[2] | (this.buffer[3] << 8);
    const dataSize = this.buffer.readUInt32LE(4);
    const dataType = this.buffer.slice(8, 12).toString();
    const crc = this.buffer.readUInt16LE(size - 2);

    const crcCalc = new CRC16();
    crcCalc.update(this.buffer.slice(0, size - 2), 0, size - 2);
    if (crc !== crcCalc.getValue()) {
      throw new FitRuntimeException('Header CRC mismatch');
    }

    this.header = {
      headerSize: size,
      protocolVersion: protoVer,
      profileVersion: profVer,
      dataSize,
      dataType,
      crc,
    };
    return this.header;
  }
}

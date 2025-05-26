import { FileEncoder } from '../FileEncoder';
import FileDecoder from '../FileDecoder';
import ProtocolVersion from '../ProtocolVersion';
import Fit from '../Fit';
import FileIdMesg from '../FileIdMesg';
import * as fs from 'fs';

test('FileEncoder writes header and CRC', () => {
  const path = './header_test.fit';
  const encoder = new FileEncoder(path, ProtocolVersion.V1_0);
  encoder.close();

  const decoder = new FileDecoder(path);
  const header = decoder.readHeader();
  expect(header.dataSize).toBe(0);
  expect(header.dataType).toBe('.FIT');
  const buf = fs.readFileSync(path);
  expect(buf.slice(-2).readUInt16LE(0)).toBe(encoder['crc16'].getValue());
  fs.unlinkSync(path);
});

test('encoding message updates data size', () => {
  const path = './mesg_test.fit';
  const enc = new FileEncoder(path, ProtocolVersion.V2_0);
  enc.writeMesg(new FileIdMesg());
  enc.close();

  const buf = fs.readFileSync(path);
  const dec = new FileDecoder(path);
  const header = dec.readHeader();
  expect(header.dataSize).toBe(buf.length - Fit.FILE_HDR_SIZE - Fit.CRC_SIZE);
  fs.unlinkSync(path);
});

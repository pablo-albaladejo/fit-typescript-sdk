import BigInteger from '../BigInteger';
import BigDecimal from '../BigDecimal';
import { FileEncoder } from '../FileEncoder';
import FileDecoder from '../FileDecoder';
import ProtocolVersion from '../ProtocolVersion';
import * as fs from 'fs';

test('BigInteger and BigDecimal basic operations', () => {
  const bi = new BigInteger('12345678901234567890');
  const bytes = [0xd2, 0x02, 0x96, 0x49]; // little endian for 1234567890
  const bi2 = new BigInteger(bytes);
  expect(bi.compareTo(new BigInteger('12345678901234567890'))).toBe(0);
  expect(bi2.toString()).toBe('1234567890');

  const bd1 = new BigDecimal('10');
  const bd2 = new BigDecimal('5');
  expect(bd1.compareTo(bd2)).toBe(1);
});

test('FileEncoder and FileDecoder header roundtrip', () => {
  const path = './tmp.fit';
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

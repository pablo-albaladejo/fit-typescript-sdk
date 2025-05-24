import { PassThrough } from 'stream';
import InputStream from '../InputStream';
import OutputStream from '../OutputStream';
import DataInputStream from '../DataInputStream';
import DataOutputStream from '../DataOutputStream';
import OutputStreamWriter from '../OutputStreamWriter';

test('Data stream roundtrip', () => {
  const pass = new PassThrough();
  const chunks: Buffer[] = [];
  pass.on('data', (c) => chunks.push(c as Buffer));

  const out = new OutputStream(pass);
  const dataOut = new DataOutputStream(out);
  dataOut.writeByte(0x12);
  dataOut.writeShort(0x1234);
  dataOut.writeInt(0x12345678);
  dataOut.writeFloat(1.25);
  dataOut.writeDouble(2.5);
  const writer = new OutputStreamWriter(out);
  writer.write('OK');
  writer.flush();

  const buffer = Buffer.concat(chunks);
  const input = new InputStream(buffer);
  const dataIn = new DataInputStream(input);

  expect(dataIn.readByte()).toBe(0x12);
  expect(dataIn.readShort()).toBe(0x1234);
  expect(dataIn.readInt()).toBe(0x12345678);
  expect(dataIn.readFloat()).toBeCloseTo(1.25);
  expect(dataIn.readDouble()).toBeCloseTo(2.5);

  const strBytes: number[] = new Array(2);
  dataIn.read(strBytes, 0, 2);
  expect(Buffer.from(strBytes).toString()).toBe('OK');
});

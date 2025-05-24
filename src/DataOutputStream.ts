import OutputStream from './OutputStream';

class DataOutputStream {
  constructor(private stream: OutputStream) {}

  writeByte(v: number): void {
    this.stream.write(Buffer.from([v & 0xff]));
  }

  writeShort(v: number): void {
    const buf = Buffer.alloc(2);
    buf.writeInt16LE(v, 0);
    this.stream.write(buf);
  }

  writeInt(v: number): void {
    const buf = Buffer.alloc(4);
    buf.writeInt32LE(v, 0);
    this.stream.write(buf);
  }

  writeFloat(v: number): void {
    const buf = Buffer.alloc(4);
    buf.writeFloatLE(v, 0);
    this.stream.write(buf);
  }

  writeDouble(v: number): void {
    const buf = Buffer.alloc(8);
    buf.writeDoubleLE(v, 0);
    this.stream.write(buf);
  }

  writeLong(v: number | bigint): void {
    const buf = Buffer.alloc(8);
    buf.writeBigInt64LE(BigInt(v), 0);
    this.stream.write(buf);
  }
}

export default DataOutputStream;

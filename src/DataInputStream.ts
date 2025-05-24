import InputStream from './InputStream';

class DataInputStream {
  constructor(private input: InputStream) {}

  read(buffer: Buffer | number[], offset: number, length: number): number {
    return this.input.read(buffer, offset, length);
  }

  readByte(): number {
    const buf = Buffer.alloc(1);
    this.input.read(buf, 0, 1);
    return buf[0];
  }

  readShort(): number {
    const buf = Buffer.alloc(2);
    this.input.read(buf, 0, 2);
    return buf.readInt16LE(0);
  }

  readInt(): number {
    const buf = Buffer.alloc(4);
    this.input.read(buf, 0, 4);
    return buf.readInt32LE(0);
  }

  readFloat(): number {
    const buf = Buffer.alloc(4);
    this.input.read(buf, 0, 4);
    return buf.readFloatLE(0);
  }

  readDouble(): number {
    const buf = Buffer.alloc(8);
    this.input.read(buf, 0, 8);
    return buf.readDoubleLE(0);
  }
}

export default DataInputStream;

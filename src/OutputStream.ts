import { Writable } from 'stream';

class OutputStream {
  constructor(private stream: Writable) {}

  write(data: Buffer | number): void {
    if (typeof data === 'number') {
      this.stream.write(Buffer.from([data]));
    } else {
      this.stream.write(data);
    }
  }
}

export default OutputStream;

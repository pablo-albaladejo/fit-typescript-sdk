import { Buffer } from 'buffer';

class InputStream {
  private position = 0;
  private buffer: Buffer;

  constructor(source: Buffer | string) {
    if (typeof source === 'string') {
      this.buffer = Buffer.from(source, 'binary');
    } else {
      this.buffer = source;
    }
  }

  read(target: Buffer | number[], offset: number, length: number): number {
    const available = Math.min(length, this.buffer.length - this.position);
    if (available <= 0) {
      return 0;
    }

    const slice = this.buffer.slice(this.position, this.position + available);
    if (Array.isArray(target)) {
      for (let i = 0; i < slice.length; i++) {
        target[offset + i] = slice[i];
      }
    } else {
      slice.copy(target, offset, 0, slice.length);
    }

    this.position += available;
    return available;
  }
}

export default InputStream;

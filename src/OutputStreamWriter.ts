import OutputStream from './OutputStream';

class OutputStreamWriter {
  constructor(private stream: OutputStream, private encoding: BufferEncoding = 'utf-8') {}

  write(data: string): void {
    this.stream.write(Buffer.from(data, this.encoding));
  }

  flush(): void {
    // no-op for now
  }
}

export default OutputStreamWriter;

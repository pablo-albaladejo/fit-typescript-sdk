/// <reference types="node" />
import OutputStream from './OutputStream';
declare class OutputStreamWriter {
    private stream;
    private encoding;
    constructor(stream: OutputStream, encoding?: BufferEncoding);
    write(data: string): void;
    flush(): void;
}
export default OutputStreamWriter;

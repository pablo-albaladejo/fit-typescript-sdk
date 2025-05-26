/// <reference types="node" />
/// <reference types="node" />
import { Writable } from 'stream';
declare class OutputStream {
    private stream;
    constructor(stream: Writable);
    write(data: Buffer | number): void;
}
export default OutputStream;

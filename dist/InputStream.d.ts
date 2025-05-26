/// <reference types="node" />
import { Buffer } from 'buffer';
declare class InputStream {
    private position;
    private buffer;
    constructor(source: Buffer | string);
    read(target: Buffer | number[], offset: number, length: number): number;
}
export default InputStream;

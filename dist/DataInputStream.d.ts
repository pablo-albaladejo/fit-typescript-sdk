/// <reference types="node" />
import InputStream from './InputStream';
declare class DataInputStream {
    private input;
    constructor(input: InputStream);
    read(buffer: Buffer | number[], offset: number, length: number): number;
    readByte(): number;
    readShort(): number;
    readInt(): number;
    readFloat(): number;
    readDouble(): number;
}
export default DataInputStream;

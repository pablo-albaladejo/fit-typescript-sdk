import OutputStream from './OutputStream';
declare class DataOutputStream {
    private stream;
    constructor(stream: OutputStream);
    writeByte(v: number): void;
    writeShort(v: number): void;
    writeInt(v: number): void;
    writeFloat(v: number): void;
    writeDouble(v: number): void;
    writeLong(v: number | bigint): void;
}
export default DataOutputStream;

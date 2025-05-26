/// <reference types="node" />
declare class DeveloperField {
    constructor(other?: DeveloperField);
    getNumValues(): number;
}
declare class DeveloperDataIdMesg {
}
declare class FieldComponent {
}
declare enum ProfileType {
    ENUM = 0
}
declare enum FitBaseType {
    UINT8 = 0
}
declare class OutputStream {
    write(_b: Buffer | number | string): void;
}
declare class DataOutputStream {
    private s;
    constructor(s: OutputStream);
    writeByte(_v: number): void;
    writeShort(_v: number): void;
    writeInt(_v: number): void;
    writeFloat(_v: number): void;
    writeDouble(_v: number): void;
    writeLong(_v: number | bigint): void;
}
declare class OutputStreamWriter {
    constructor(_s: OutputStream, _enc?: string);
    write(_s: string): void;
    flush(): void;
}
declare class BigDecimal {
    private v;
    constructor(v: string);
    compareTo(_o: BigDecimal): number;
    toString(): string;
}

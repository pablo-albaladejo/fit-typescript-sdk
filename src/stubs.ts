/* eslint-disable @typescript-eslint/no-unused-vars */
// Minimal stub types to allow compilation of tests
class DeveloperField {
  constructor(other?: DeveloperField) {}
  getNumValues(): number { return 0; }
}

class DeveloperDataIdMesg {}
class FieldComponent {}
enum ProfileType { ENUM }
enum FitBaseType { UINT8 }
class OutputStream {
  write(_b: Buffer | number | string): void {}
}
class DataOutputStream {
  constructor(private s: OutputStream) {}
  writeByte(_v: number): void {}
  writeShort(_v: number): void {}
  writeInt(_v: number): void {}
  writeFloat(_v: number): void {}
  writeDouble(_v: number): void {}
  writeLong(_v: number | bigint): void {}
}
class OutputStreamWriter {
  constructor(_s: OutputStream, _enc?: string) {}
  write(_s: string): void {}
  flush(): void {}
}
class BigDecimal {
  constructor(private v: string) {}
  compareTo(_o: BigDecimal): number { return 0; }
  toString(): string { return this.v; }
}

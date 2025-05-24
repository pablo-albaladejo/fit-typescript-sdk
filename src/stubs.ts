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
  write(_b: any): void {}
}
class DataOutputStream {
  constructor(private s: OutputStream) {}
  writeByte(_v:any){}
  writeShort(_v:any){}
  writeInt(_v:any){}
  writeFloat(_v:any){}
  writeDouble(_v:any){}
  writeLong(_v:any){}
}
class OutputStreamWriter {
  constructor(_s: OutputStream, _enc?: string) {}
  write(_s: string) {}
  flush() {}
}
class BigDecimal {
  constructor(private v: string) {}
  compareTo(_o: BigDecimal){ return 0; }
  toString(){ return this.v; }
}

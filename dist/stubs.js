"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
// Minimal stub types to allow compilation of tests
class DeveloperField {
    constructor(other) { }
    getNumValues() { return 0; }
}
class DeveloperDataIdMesg {
}
class FieldComponent {
}
var ProfileType;
(function (ProfileType) {
    ProfileType[ProfileType["ENUM"] = 0] = "ENUM";
})(ProfileType || (ProfileType = {}));
var FitBaseType;
(function (FitBaseType) {
    FitBaseType[FitBaseType["UINT8"] = 0] = "UINT8";
})(FitBaseType || (FitBaseType = {}));
class OutputStream {
    write(_b) { }
}
class DataOutputStream {
    constructor(s) {
        this.s = s;
    }
    writeByte(_v) { }
    writeShort(_v) { }
    writeInt(_v) { }
    writeFloat(_v) { }
    writeDouble(_v) { }
    writeLong(_v) { }
}
class OutputStreamWriter {
    constructor(_s, _enc) { }
    write(_s) { }
    flush() { }
}
class BigDecimal {
    constructor(v) {
        this.v = v;
    }
    compareTo(_o) { return 0; }
    toString() { return this.v; }
}

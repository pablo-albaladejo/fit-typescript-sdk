"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataOutputStream {
    constructor(stream) {
        this.stream = stream;
    }
    writeByte(v) {
        this.stream.write(Buffer.from([v & 0xff]));
    }
    writeShort(v) {
        const buf = Buffer.alloc(2);
        buf.writeInt16LE(v, 0);
        this.stream.write(buf);
    }
    writeInt(v) {
        const buf = Buffer.alloc(4);
        buf.writeInt32LE(v, 0);
        this.stream.write(buf);
    }
    writeFloat(v) {
        const buf = Buffer.alloc(4);
        buf.writeFloatLE(v, 0);
        this.stream.write(buf);
    }
    writeDouble(v) {
        const buf = Buffer.alloc(8);
        buf.writeDoubleLE(v, 0);
        this.stream.write(buf);
    }
    writeLong(v) {
        const buf = Buffer.alloc(8);
        buf.writeBigInt64LE(BigInt(v), 0);
        this.stream.write(buf);
    }
}
exports.default = DataOutputStream;

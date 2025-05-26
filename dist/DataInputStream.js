"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataInputStream {
    constructor(input) {
        this.input = input;
    }
    read(buffer, offset, length) {
        return this.input.read(buffer, offset, length);
    }
    readByte() {
        const buf = Buffer.alloc(1);
        this.input.read(buf, 0, 1);
        return buf[0];
    }
    readShort() {
        const buf = Buffer.alloc(2);
        this.input.read(buf, 0, 2);
        return buf.readInt16LE(0);
    }
    readInt() {
        const buf = Buffer.alloc(4);
        this.input.read(buf, 0, 4);
        return buf.readInt32LE(0);
    }
    readFloat() {
        const buf = Buffer.alloc(4);
        this.input.read(buf, 0, 4);
        return buf.readFloatLE(0);
    }
    readDouble() {
        const buf = Buffer.alloc(8);
        this.input.read(buf, 0, 8);
        return buf.readDoubleLE(0);
    }
}
exports.default = DataInputStream;

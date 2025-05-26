"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BigInteger {
    constructor(value, bytes) {
        if (typeof value === 'number' && Array.isArray(bytes)) {
            this.value = BigInteger.fromBytes(bytes, value < 0);
        }
        else if (Array.isArray(value) || value instanceof Uint8Array) {
            this.value = BigInteger.fromBytes(Array.from(value));
        }
        else {
            // value is guaranteed to be either a string, number or bigint here
            this.value = BigInt(value);
        }
    }
    static fromBytes(bytes, negative = false) {
        let result = BigInt(0);
        for (let i = bytes.length - 1; i >= 0; i--) {
            result = (result << BigInt(8)) + BigInt(bytes[i] & 0xff);
        }
        return negative ? -result : result;
    }
    compareTo(o) {
        if (this.value < o.value)
            return -1;
        if (this.value > o.value)
            return 1;
        return 0;
    }
    toString(radix = 10) {
        return this.value.toString(radix);
    }
    valueOf() {
        return this.value;
    }
}
exports.default = BigInteger;

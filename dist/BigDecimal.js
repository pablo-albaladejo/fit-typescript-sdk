"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BigDecimal {
    constructor(value) {
        this.value = typeof value === 'bigint' ? Number(value) : Number(value);
    }
    compareTo(o) {
        if (this.value < o.value)
            return -1;
        if (this.value > o.value)
            return 1;
        return 0;
    }
    toString() {
        return this.value.toString();
    }
    valueOf() {
        return this.value;
    }
}
exports.default = BigDecimal;

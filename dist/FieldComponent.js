"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldComponent {
    constructor(fieldNum = 0, bits = 0, accumulate = false, scale = 1, offset = 0, units = '') {
        this.fieldNum = fieldNum;
        this.bits = bits;
        this.accumulate = accumulate;
        this.scale = scale;
        this.offset = offset;
        this.units = units;
    }
    getFieldNum() {
        return this.fieldNum;
    }
    getBits() {
        return this.bits;
    }
    getAccumulate() {
        return this.accumulate;
    }
    getScale() {
        return this.scale;
    }
    getOffset() {
        return this.offset;
    }
    getUnits() {
        return this.units;
    }
}
exports.default = FieldComponent;

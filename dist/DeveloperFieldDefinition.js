"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeveloperFieldDefinition {
    constructor(field) {
        var _a, _b, _c, _d, _e, _f;
        this.num = (_b = (_a = field === null || field === void 0 ? void 0 : field.getNum) === null || _a === void 0 ? void 0 : _a.call(field)) !== null && _b !== void 0 ? _b : 0;
        this.size = (_d = (_c = field === null || field === void 0 ? void 0 : field.getSize) === null || _c === void 0 ? void 0 : _c.call(field)) !== null && _d !== void 0 ? _d : 0;
        this.developerDataIndex = (_f = (_e = field === null || field === void 0 ? void 0 : field.getDeveloperDataIndex) === null || _e === void 0 ? void 0 : _e.call(field)) !== null && _f !== void 0 ? _f : 0;
    }
    write(out) {
        out.write(this.num);
        out.write(this.size);
        out.write(this.developerDataIndex);
    }
    getSize() {
        return this.size;
    }
    setSize(size) {
        this.size = size;
    }
    getDeveloperDataIndex() {
        return this.developerDataIndex;
    }
    getNum() {
        return this.num;
    }
    equals(other) {
        if (this === other) {
            return true;
        }
        if (!(other instanceof DeveloperFieldDefinition)) {
            return false;
        }
        const o = other;
        return (this.num === o.num &&
            this.size === o.size &&
            this.developerDataIndex === o.developerDataIndex);
    }
}
exports.default = DeveloperFieldDefinition;

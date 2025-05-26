"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FieldDefinitionBase_1 = __importDefault(require("./FieldDefinitionBase"));
class FieldDefinition extends FieldDefinitionBase_1.default {
    constructor(field) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.num = (_b = (_a = field.getNum) === null || _a === void 0 ? void 0 : _a.call(field)) !== null && _b !== void 0 ? _b : 0;
        this.size = (_d = (_c = field.getSize) === null || _c === void 0 ? void 0 : _c.call(field)) !== null && _d !== void 0 ? _d : 0;
        this.type = (_f = (_e = field.getType) === null || _e === void 0 ? void 0 : _e.call(field)) !== null && _f !== void 0 ? _f : 0;
    }
    write(out) {
        try {
            out.write(this.num);
            out.write(this.size);
            out.write(this.type);
        }
        catch (e) {
            // Handle IOException if needed
            // ...
        }
    }
    getNum() {
        return this.num;
    }
    setSize(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    getType() {
        return this.type;
    }
    equals(other) {
        if (this === other) {
            return true;
        }
        if (!(other instanceof FieldDefinition)) {
            return false;
        }
        const otherFieldDef = other;
        return (this.num === otherFieldDef.num &&
            this.size === otherFieldDef.size &&
            this.type === otherFieldDef.type);
    }
}
exports.default = FieldDefinition;

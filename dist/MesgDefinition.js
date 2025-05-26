"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeveloperFieldDefinition_1 = __importDefault(require("./DeveloperFieldDefinition"));
const FieldDefinition_1 = __importDefault(require("./FieldDefinition"));
const Fit_1 = __importDefault(require("./Fit"));
const FitRuntimeException_1 = __importDefault(require("./FitRuntimeException"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
const Utils = __importStar(require("./Utils"));
class MesgDefinition {
    constructor(mesg) {
        this.num = MesgNum_1.default.INVALID;
        this.localNum = 0;
        this.arch = Fit_1.default.ARCH_ENDIAN_BIG;
        this.fields = [];
        this.developerFields = [];
        if (mesg) {
            this.num = mesg.getNum();
            this.localNum = mesg.getLocalNum();
            if (this.localNum >= Fit_1.default.MAX_LOCAL_MESGS) {
                throw new FitRuntimeException_1.default(`Invalid local message number ${this.localNum}. Local message number must be < ${Fit_1.default.MAX_LOCAL_MESGS}.`);
            }
            for (const field of mesg.getFields()) {
                this.fields.push(new FieldDefinition_1.default(field));
            }
            mesg.getDeveloperFields().forEach(() => {
                this.developerFields.push(new DeveloperFieldDefinition_1.default());
            });
        }
    }
    getNum() {
        return this.num;
    }
    getLocalNum() {
        return this.localNum;
    }
    getArch() {
        return this.arch;
    }
    getFields() {
        return this.fields;
    }
    getField(num) {
        return this.fields.find((field) => field.getNum() === num) || null;
    }
    addField(fieldDef) {
        this.fields.push(fieldDef);
    }
    addDeveloperField(fieldDef) {
        this.developerFields.push(fieldDef);
    }
    getDeveloperFieldTotalSize() {
        let totalSize = 0;
        for (const devField of this.developerFields) {
            totalSize += devField.getSize();
        }
        return totalSize;
    }
    write(out) {
        try {
            let headerByte = Fit_1.default.HDR_TYPE_DEF_BIT | (this.localNum & Fit_1.default.HDR_TYPE_MASK);
            if (!(this.developerFields.length === 0)) {
                headerByte |= Fit_1.default.HDR_DEV_FIELDS_BIT;
            }
            out.write(headerByte); // Message definition record header.
            out.write(0); // Reserved
            out.write(Fit_1.default.ARCH_ENDIAN_BIG);
            out.write(this.num >> 8);
            out.write(this.num);
            out.write(this.fields.length);
            for (const field of this.fields) {
                field.write(out);
            }
            if (!(this.developerFields.length === 0)) {
                out.write(this.developerFields.length);
                // Writing developer fields is omitted in test stubs
            }
        }
        catch (e) {
            throw new FitRuntimeException_1.default(e);
        }
    }
    supports(mesg) {
        if (!mesg) {
            return false;
        }
        if (this.num !== mesg.getNum()) {
            return false;
        }
        if (this.localNum !== mesg.getLocalNum()) {
            return false;
        }
        for (const fieldDef of mesg.getFields()) {
            const supportedFieldDef = this.getField(fieldDef.getNum());
            if (!supportedFieldDef ||
                fieldDef.getSize() > supportedFieldDef.getSize()) {
                return false;
            }
        }
        for (const devField of mesg.getDeveloperFields()) {
            const supportedDef = this.getDeveloperField(devField.getDeveloperDataIndex(), devField.getNum());
            if (!supportedDef || devField.getSize() > supportedDef.getSize()) {
                return false;
            }
        }
        return true;
    }
    getDeveloperField(developerIndex, num) {
        return (this.developerFields.find((field) => field.getDeveloperDataIndex() === developerIndex &&
            field.getNum() === num) || null);
    }
    equals(other) {
        if (this === other) {
            return true;
        }
        if (!(other instanceof MesgDefinition)) {
            return false;
        }
        const otherMesgDef = other;
        if (this.num !== otherMesgDef.num ||
            this.localNum !== otherMesgDef.localNum ||
            this.fields.length !== otherMesgDef.fields.length) {
            return false;
        }
        for (let i = 0; i < this.fields.length; i++) {
            if (!this.fields[i].equals(otherMesgDef.fields[i])) {
                return false;
            }
        }
        return true;
    }
    hashCode() {
        let hashCode = 1;
        hashCode = hashCode * 31 + Utils.hashCode(this.num);
        hashCode = hashCode * 47 + Utils.hashCode(this.localNum);
        hashCode = hashCode * 19 + Utils.hashCode(this.fields);
        return hashCode;
    }
    getDeveloperFields() {
        return this.developerFields;
    }
}
exports.default = MesgDefinition;

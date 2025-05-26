"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = __importDefault(require("./Field"));
const DeveloperField_1 = __importDefault(require("./DeveloperField"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class Mesg {
    constructor(nameOrMesg, num) {
        this.decoderMesgIndex = 0;
        this.fields = [];
        this.developerFields = [];
        if (typeof nameOrMesg === 'string') {
            this.name = nameOrMesg;
            this.num = num || MesgNum_1.default.INVALID;
            this.localNum = 0;
            this.systemTimeOffset = 0;
        }
        else if (nameOrMesg instanceof Mesg) {
            const mesg = nameOrMesg;
            this.name = mesg.name;
            this.num = mesg.num;
            this.localNum = mesg.localNum;
            this.systemTimeOffset = mesg.systemTimeOffset;
            for (const field of mesg.fields) {
                if (field.getNumValues() > 0) {
                    this.fields.push(new Field_1.default(field));
                }
            }
            for (const field of mesg.developerFields) {
                if (field.getNumValues() > 0) {
                    this.developerFields.push(new DeveloperField_1.default(field));
                }
            }
        }
        else {
            this.name = 'unknown';
            this.num = MesgNum_1.default.INVALID;
            this.localNum = 0;
            this.systemTimeOffset = 0;
        }
    }
    getLocalNum() {
        return this.localNum;
    }
    getNum() {
        return this.num;
    }
    getDeveloperFields() {
        return this.developerFields;
    }
    getFields() {
        return this.fields;
    }
    write(_out, _defn) {
        // Stub implementation for tests
    }
}
exports.default = Mesg;

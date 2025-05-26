"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = __importDefault(require("./Field"));
class DeveloperField extends Field_1.default {
    constructor(field) {
        super(field);
        if (field) {
            this.developerDataIndex = field.developerDataIndex;
        }
        else {
            this.developerDataIndex = 0;
        }
    }
    getDeveloperDataIndex() {
        return this.developerDataIndex;
    }
    setDeveloperDataIndex(index) {
        this.developerDataIndex = index;
    }
}
exports.default = DeveloperField;

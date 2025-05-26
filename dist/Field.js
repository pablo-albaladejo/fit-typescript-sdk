"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FieldBase_1 = __importDefault(require("./FieldBase"));
const Fit_1 = __importDefault(require("./Fit"));
const Profile_1 = require("./Profile");
class Field extends FieldBase_1.default {
    constructor(field) {
        super(field);
        if (!field) {
            this.name = 'unknown';
            this.num = Fit_1.default.FIELD_NUM_INVALID;
            this.type = 0;
            this.profileType = Profile_1.Type.ENUM;
            this.scale = 1;
            this.offset = 0;
            this.units = '';
            this.isAccumulated = false;
            this.values = [];
            this.components = [];
            this.subFields = [];
            this.isExpandedField = false;
            return;
        }
        this.name = field.name;
        this.num = field.num;
        this.type = field.type;
        this.profileType = field.profileType;
        this.scale = field.scale;
        this.offset = field.offset;
        this.units = field.units;
        this.isAccumulated = field.isAccumulated;
        this.components = field.components;
        this.subFields = field.subFields;
        this.isExpandedField = field.isExpandedField;
    }
    getNum() {
        return this.num;
    }
    getUnits() {
        return this.units;
    }
    getType() {
        return this.type;
    }
    getProfileType() {
        return this.profileType;
    }
    getOffset() {
        return this.offset;
    }
    getScale() {
        return this.scale;
    }
    getFieldName() {
        return this.name;
    }
    getIsAccumulated() {
        return this.isAccumulated;
    }
    setIsExpanded(newValue) {
        this.isExpandedField = newValue;
    }
    getIsExpanded() {
        return this.isExpandedField;
    }
    getSubField(subFieldName) {
        for (const subField of this.subFields) {
            if (subField.name === subFieldName) {
                return subField;
            }
        }
        return null;
    }
    getSubField(subFieldIndex) {
        if (subFieldIndex >= 0 && subFieldIndex < this.subFields.length) {
            return this.subFields[subFieldIndex];
        }
        else {
            return null;
        }
    }
}
exports.default = Field;

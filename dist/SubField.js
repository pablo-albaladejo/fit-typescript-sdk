"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubFieldMap {
    constructor(refFieldNum, refFieldValue) {
        this.refFieldNum = refFieldNum;
        this.refFieldValue = refFieldValue;
    }
    canMesgSupport(mesg) {
        const field = mesg.getField(this.refFieldNum);
        if (field !== null) {
            const value = field.getLongValue(0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
            if (value !== null) {
                if (value === this.refFieldValue) {
                    return true;
                }
            }
        }
        return false;
    }
}
class SubField {
    constructor(subField) {
        if (!subField) {
            this.name = 'unknown';
            this.type = 0;
            this.scale = 1;
            this.offset = 0;
            this.units = '';
            this.maps = [];
            this.components = [];
            return;
        }
        this.name = subField.name;
        this.type = subField.type;
        this.scale = subField.scale;
        this.offset = subField.offset;
        this.units = subField.units;
        this.maps = subField.maps;
        this.components = subField.components;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getUnits() {
        return this.units;
    }
    addMap(refFieldNum, refFieldValue) {
        this.maps.push(new SubFieldMap(refFieldNum, refFieldValue));
    }
    addComponent(component) {
        this.components.push(component);
    }
    canMesgSupport(mesg) {
        for (const map of this.maps) {
            if (map.canMesgSupport(mesg)) {
                return true;
            }
        }
        return false;
    }
}
exports.default = SubField;

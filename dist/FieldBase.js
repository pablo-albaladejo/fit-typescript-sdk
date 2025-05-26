"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fit_1 = __importDefault(require("./Fit"));
const DataInputStream_1 = __importDefault(require("./DataInputStream"));
const DataOutputStream_1 = __importDefault(require("./DataOutputStream"));
const OutputStreamWriter_1 = __importDefault(require("./OutputStreamWriter"));
const BigInteger_1 = __importDefault(require("./BigInteger"));
const BigDecimal_1 = __importDefault(require("./BigDecimal"));
class FieldBase {
    constructor(other) {
        this.values = new Array();
        if (other !== undefined) {
            for (const value of other.values) {
                this.values.push(value);
            }
        }
    }
    getName(subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getNameInternal(subField);
    }
    getNameInternal(subField) {
        if (subField === null) {
            return this.getFieldName();
        }
        else {
            return subField.name;
        }
    }
    getType(subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getTypeInternal(subField);
    }
    getTypeInternal(subField) {
        if (subField === null) {
            return this.getType();
        }
        else {
            return subField.type;
        }
    }
    getUnits(subFieldIndex) {
        return this.getUnitsInternal(this.getSubField(subFieldIndex));
    }
    getUnits(subFieldName) {
        return this.getUnitsInternal(this.getSubField(subFieldName));
    }
    getUnitsInternal(subField) {
        if (subField === null) {
            return this.getUnits();
        }
        else {
            return subField.units;
        }
    }
    getSize() {
        let size = 0;
        switch (this.getType()) {
            case Fit_1.default.BASE_TYPE_ENUM:
            case Fit_1.default.BASE_TYPE_UINT8:
            case Fit_1.default.BASE_TYPE_UINT8Z:
            case Fit_1.default.BASE_TYPE_SINT8:
            case Fit_1.default.BASE_TYPE_BYTE:
            case Fit_1.default.BASE_TYPE_SINT16:
            case Fit_1.default.BASE_TYPE_UINT16:
            case Fit_1.default.BASE_TYPE_UINT16Z:
            case Fit_1.default.BASE_TYPE_SINT32:
            case Fit_1.default.BASE_TYPE_UINT32:
            case Fit_1.default.BASE_TYPE_UINT32Z:
            case Fit_1.default.BASE_TYPE_FLOAT32:
            case Fit_1.default.BASE_TYPE_FLOAT64:
            case Fit_1.default.BASE_TYPE_SINT64:
            case Fit_1.default.BASE_TYPE_UINT64:
            case Fit_1.default.BASE_TYPE_UINT64Z:
                size =
                    this.getNumValues() *
                        Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK];
                break;
            case Fit_1.default.BASE_TYPE_STRING:
                for (const value of values) {
                    try {
                        size += value.toString().getBytes('UTF-8').length + 1;
                    }
                    catch (ignored) {
                        // ignore encoding errors when calculating size
                    }
                }
                break;
            default:
                break;
        }
        return size;
    }
    addRawValue(rawValue) {
        if (rawValue === null) {
            values.add(null);
        }
        else if (typeof rawValue === 'number') {
            switch (this.getType()) {
                case Fit_1.default.BASE_TYPE_ENUM:
                case Fit_1.default.BASE_TYPE_UINT8:
                case Fit_1.default.BASE_TYPE_UINT8Z:
                case Fit_1.default.BASE_TYPE_SINT16:
                case Fit_1.default.BASE_TYPE_BYTE:
                    values.add(Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_SINT8:
                    values.add(Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_UINT16:
                case Fit_1.default.BASE_TYPE_UINT16Z:
                case Fit_1.default.BASE_TYPE_SINT32:
                    values.add(Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_UINT32:
                case Fit_1.default.BASE_TYPE_UINT32Z:
                    values.add(Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT32:
                    values.add(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT64:
                    values.add(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_STRING:
                    values.add(rawValue.toString());
                    break;
                default:
                    break;
            }
        }
        else if (typeof rawValue === 'string' && rawValue === '') {
            switch (this.getType()) {
                case Fit_1.default.BASE_TYPE_ENUM:
                    values.add(Fit_1.default.ENUM_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_SINT8:
                    values.add(Fit_1.default.SINT8_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT8:
                    values.add(Fit_1.default.UINT8_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT8Z:
                    values.add(Fit_1.default.UINT8Z_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_SINT16:
                    values.add(Fit_1.default.SINT16_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT16:
                    values.add(Fit_1.default.UINT16_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT16Z:
                    values.add(Fit_1.default.UINT16Z_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_SINT32:
                    values.add(Fit_1.default.SINT32_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT32:
                    values.add(Fit_1.default.UINT32_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_UINT32Z:
                    values.add(Fit_1.default.UINT32Z_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_STRING:
                    values.add(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT32:
                    values.add(Fit_1.default.FLOAT32_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT64:
                    values.add(Fit_1.default.FLOAT64_INVALID);
                    break;
                case Fit_1.default.BASE_TYPE_BYTE:
                    values.add(Fit_1.default.BYTE_INVALID);
                    break;
                default:
                    break;
            }
        }
        else {
            values.add(rawValue);
        }
    }
    getNumValues() {
        return values.size();
    }
    isSignedInteger() {
        return this.isSignedIntegerInternal(null);
    }
    isSignedInteger(subFieldIndex) {
        return this.isSignedIntegerInternal(this.getSubField(subFieldIndex));
    }
    isSignedInteger(subFieldName) {
        return this.isSignedIntegerInternal(this.getSubField(subFieldName));
    }
    isSignedIntegerInternal(subField) {
        const type = subField === null ? this.getType() : subField.getType();
        switch (type) {
            case Fit_1.default.BASE_TYPE_SINT8:
            case Fit_1.default.BASE_TYPE_SINT16:
            case Fit_1.default.BASE_TYPE_SINT32:
            case Fit_1.default.BASE_TYPE_SINT64:
                return true;
            default:
                break;
        }
        return false;
    }
    isValid() {
        return this.isValid(0);
    }
    isValid(index) {
        const type = this.getType(Fit_1.default.SUBFIELD_INDEX_ACTIVE_SUBFIELD);
        if (index >= values.size()) {
            return false;
        }
        const value = values.get(index);
        if (typeof value === 'number') {
            if (Fit_1.default.baseTypeInvalidMap.get(type) === value) {
                return false;
            }
        }
        return true;
    }
    getBitsValue(offset, bits, signed) {
        let value = 0;
        let bitsInValue = 0;
        let bitsInData;
        let index = 0;
        let data;
        let mask;
        while (bitsInValue < bits) {
            const objData = this.getRawValueInternal(index++, null);
            if (objData === null || typeof objData !== 'number') {
                return null;
            }
            data = objData;
            data >>= offset;
            bitsInData =
                Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK] * 8 - offset;
            offset -= Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK] * 8;
            if (bitsInData > 0) {
                offset = 0;
                if (bitsInData > bits - bitsInValue) {
                    bitsInData = bits - bitsInValue;
                }
                mask = (1 << bitsInData) - 1;
                value |= (data & mask) << bitsInValue;
                bitsInValue += bitsInData;
            }
        }
        if (signed) {
            const signBit = 1 << (bits - 1);
            if ((value & signBit) !== 0) {
                value = -signBit + (value & (signBit - 1));
            }
        }
        return value;
    }
    getRawValue() {
        return this.getRawValueInternal(0, null);
    }
    getRawValue(fieldArrayIndex) {
        return this.getRawValueInternal(fieldArrayIndex, null);
    }
    getRawValue(fieldArrayIndex, subFieldIndex) {
        return this.getRawValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getRawValue(fieldArrayIndex, subFieldName) {
        return this.getRawValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getRawValueInternal(fieldArrayIndex, _subField) {
        if (fieldArrayIndex >= values.size()) {
            return null;
        }
        const value = values.get(fieldArrayIndex);
        return value;
    }
    getValue() {
        return this.getValueInternal(0, null);
    }
    getValue(fieldArrayIndex) {
        return this.getValueInternal(fieldArrayIndex, null);
    }
    getValue(fieldArrayIndex, subFieldIndex) {
        return this.getValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getValue(fieldArrayIndex, subFieldName) {
        return this.getValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getValueInternal(fieldArrayIndex, subField) {
        let scale;
        let offset;
        if (fieldArrayIndex >= values.length) {
            return null;
        }
        if (subField === null) {
            scale = this.getScale();
            offset = this.getOffset();
        }
        else {
            scale = subField.scale;
            offset = subField.offset;
        }
        const type = this.getTypeInternal(subField);
        const value = values[fieldArrayIndex];
        if (typeof value === 'number') {
            if (Fit_1.default.baseTypeInvalidMap.get(type) === value) {
                return Fit_1.default.baseTypeInvalidMap.get(type);
            }
            if (scale !== Fit_1.default.FIELD_DEFAULT_SCALE ||
                offset !== Fit_1.default.FIELD_DEFAULT_OFFSET) {
                return value / scale - offset;
            }
        }
        return value;
    }
    setValue(value) {
        this.setValueInternal(0, value, null);
    }
    setValue(fieldArrayIndex, value) {
        this.setValueInternal(fieldArrayIndex, value, null);
    }
    setValue(value, subFieldIndex) {
        this.setValueInternal(0, value, this.getSubField(subFieldIndex));
    }
    setValue(value, subFieldName) {
        this.setValueInternal(0, value, this.getSubField(subFieldName));
    }
    setValue(fieldArrayIndex, value, subFieldIndex) {
        let subField = null;
        if (subFieldIndex !== Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD) {
            subField = this.getSubField(subFieldIndex);
            if (subField === null) {
                throw new FitRuntimeException(`${subFieldIndex} is not a valid subfield index of ${this.getName()}.`);
            }
        }
        this.setValueInternal(fieldArrayIndex, value, subField);
    }
    setValue(fieldArrayIndex, value, subFieldName) {
        this.setValueInternal(fieldArrayIndex, value, this.getSubField(subFieldName));
    }
    rangeCorrect(type, value) {
        if (Fit_1.default.baseTypeMinMap.get(type) === null ||
            Fit_1.default.baseTypeMaxMap.get(type) === null) {
            // Type does not have a range limit. Return value as is.
            return value;
        }
        try {
            const min = new BigDecimal_1.default(String(Fit_1.default.baseTypeMinMap.get(type)));
            const max = new BigDecimal_1.default(String(Fit_1.default.baseTypeMaxMap.get(type)));
            const val = new BigDecimal_1.default(String(value));
            if (val.compareTo(min) < 0 || val.compareTo(max) > 0) {
                return Fit_1.default.baseTypeInvalidMap.get(type);
            }
            else {
                return value;
            }
        }
        catch (e) {
            return Fit_1.default.baseTypeInvalidMap.get(type);
        }
    }
    setValueInternal(fieldArrayIndex, value, subField) {
        while (fieldArrayIndex >= this.getNumValues())
            this.addValue(new Object());
        let scale;
        let offset;
        if (subField === null) {
            scale = this.getScale();
            offset = this.getOffset();
        }
        else {
            scale = subField.scale;
            offset = subField.offset;
        }
        if (value === null) {
            values[fieldArrayIndex] = null;
        }
        else if (typeof value === 'number' &&
            (scale !== Fit_1.default.FIELD_DEFAULT_SCALE || offset !== Fit_1.default.FIELD_DEFAULT_OFFSET)) {
            const rawValue = (value + offset) * scale;
            switch (this.getType()) {
                case Fit_1.default.BASE_TYPE_ENUM:
                case Fit_1.default.BASE_TYPE_UINT8:
                case Fit_1.default.BASE_TYPE_UINT8Z:
                case Fit_1.default.BASE_TYPE_SINT16:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_SINT8:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_UINT16:
                case Fit_1.default.BASE_TYPE_UINT16Z:
                case Fit_1.default.BASE_TYPE_SINT32:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_UINT32:
                case Fit_1.default.BASE_TYPE_UINT32Z:
                case Fit_1.default.BASE_TYPE_SINT64:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), Math.round(rawValue));
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT32:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT64:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_STRING:
                    values[fieldArrayIndex] = rawValue.toString();
                    break;
                case Fit_1.default.BASE_TYPE_UINT64:
                case Fit_1.default.BASE_TYPE_UINT64Z: {
                    const val = Math.round(rawValue);
                    const size = Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK];
                    const bytes = new Uint8Array(size);
                    for (let i = 0; i < size; i++) {
                        bytes[i] = (val >>> (8 * i)) & 0xff;
                    }
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), new BigInteger_1.default(bytes));
                    break;
                }
                case Fit_1.default.BASE_TYPE_BYTE:
                    // Byte base types are only invalid if all bytes in an array are set to invalid.
                    values[fieldArrayIndex] = Math.round(rawValue);
                    break;
                default:
                    break;
            }
        }
        else {
            this.SetValueUnscaled(fieldArrayIndex, value);
        }
    }
    SetValueUnscaled(fieldArrayIndex, value) {
        if (typeof value === 'string' && value === '') {
            switch (this.getType()) {
                case Fit_1.default.BASE_TYPE_ENUM:
                case Fit_1.default.BASE_TYPE_SINT8:
                case Fit_1.default.BASE_TYPE_UINT8:
                case Fit_1.default.BASE_TYPE_UINT8Z:
                case Fit_1.default.BASE_TYPE_SINT16:
                case Fit_1.default.BASE_TYPE_UINT16:
                case Fit_1.default.BASE_TYPE_UINT16Z:
                case Fit_1.default.BASE_TYPE_SINT32:
                case Fit_1.default.BASE_TYPE_UINT32:
                case Fit_1.default.BASE_TYPE_UINT32Z:
                case Fit_1.default.BASE_TYPE_FLOAT32:
                case Fit_1.default.BASE_TYPE_FLOAT64:
                case Fit_1.default.BASE_TYPE_BYTE:
                case Fit_1.default.BASE_TYPE_SINT64:
                case Fit_1.default.BASE_TYPE_UINT64:
                case Fit_1.default.BASE_TYPE_UINT64Z:
                    values[fieldArrayIndex] = Fit_1.default.baseTypeInvalidMap.get(this.getType());
                    break;
                case Fit_1.default.BASE_TYPE_STRING:
                    values[fieldArrayIndex] = this.rangeCorrect(this.getType(), value);
                    break;
                default:
                    break;
            }
        }
        else if (typeof value === 'string') {
            const byteCount = new TextEncoder().encode(value).length;
            if (byteCount > Fit_1.default.STRING_MAX_BYTE_COUNT) {
                throw new FitRuntimeException(`Invalid string size. Byte count can not be greater than ${Fit_1.default.STRING_MAX_BYTE_COUNT} bytes.`);
            }
            values[fieldArrayIndex] = value;
        }
        else {
            values[fieldArrayIndex] = this.rangeCorrect(this.getType(), value);
        }
    }
    setRawValue(fieldArrayIndex, rawValue) {
        while (fieldArrayIndex >= this.getNumValues()) {
            this.addValue(new Object());
        }
        if (rawValue === null) {
            values[fieldArrayIndex] = null;
        }
        // Add a scaled/offset value as the underlying field type rather than double
        else if (typeof rawValue === 'number') {
            switch (this.getType()) {
                case Fit_1.default.BASE_TYPE_ENUM:
                case Fit_1.default.BASE_TYPE_UINT8:
                case Fit_1.default.BASE_TYPE_UINT8Z:
                case Fit_1.default.BASE_TYPE_SINT16:
                case Fit_1.default.BASE_TYPE_BYTE:
                    values[fieldArrayIndex] = Math.round(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_SINT8:
                    values[fieldArrayIndex] = Math.round(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_UINT16:
                case Fit_1.default.BASE_TYPE_UINT16Z:
                case Fit_1.default.BASE_TYPE_SINT32:
                    values[fieldArrayIndex] = Math.round(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_UINT32:
                case Fit_1.default.BASE_TYPE_UINT32Z:
                case Fit_1.default.BASE_TYPE_SINT64:
                    values[fieldArrayIndex] = Math.round(rawValue);
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT32:
                    values[fieldArrayIndex] = rawValue;
                    break;
                case Fit_1.default.BASE_TYPE_FLOAT64:
                    values[fieldArrayIndex] = rawValue;
                    break;
                case Fit_1.default.BASE_TYPE_STRING:
                    values[fieldArrayIndex] = rawValue.toString();
                    break;
                case Fit_1.default.BASE_TYPE_UINT64:
                case Fit_1.default.BASE_TYPE_UINT64Z: {
                    const val = Math.round(rawValue);
                    const size = Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK];
                    const bytes = new Uint8Array(size);
                    for (let i = 0; i < size; i++) {
                        bytes[i] = (val >>> (8 * i)) & 0xff;
                    }
                    break;
                }
                default:
                    break;
            }
        }
        else {
            this.SetValueUnscaled(fieldArrayIndex, rawValue);
        }
    }
    addValue(value) {
        if (typeof value === 'number' && this.getType() === Fit_1.default.BASE_TYPE_STRING) {
            let string = this.getStringValueInternal(0, null);
            const number = value;
            if (string === null) {
                string = '';
            }
            string += String.fromCharCode(number);
            this.setValueInternal(0, string, null);
            return;
        }
        values.push(value);
    }
    getByteValues() {
        return this.getByteValues(null);
    }
    getByteValues(subfieldIndex) {
        return this.getByteValues(this.getSubField(subfieldIndex));
    }
    getByteValues(subfieldName) {
        return this.getByteValues(this.getSubField(subfieldName));
    }
    getByteValues(subfield) {
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getByteValueInternal(i, subfield);
        }
        return rv;
    }
    getByteValue() {
        return this.getByteValueInternal(0, null);
    }
    getByteValue(fieldArrayIndex) {
        return this.getByteValueInternal(fieldArrayIndex, null);
    }
    getByteValue(fieldArrayIndex, subFieldIndex) {
        return this.getByteValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getByteValue(fieldArrayIndex, subFieldName) {
        return this.getByteValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getByteValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value === null) {
            return null;
        }
        return value;
    }
    getShortValues() {
        return this.getShortValues(null);
    }
    getShortValues(subfieldIndex) {
        return this.getShortValues(this.getSubField(subfieldIndex));
    }
    getShortValues(subfieldName) {
        return this.getShortValues(this.getSubField(subfieldName));
    }
    getShortValues(subfield) {
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getShortValueInternal(i, subfield);
        }
        return rv;
    }
    getShortValue() {
        return this.getShortValueInternal(0, null);
    }
    getShortValue(fieldArrayIndex) {
        return this.getShortValueInternal(fieldArrayIndex, null);
    }
    getShortValue(fieldArrayIndex, subFieldIndex) {
        return this.getShortValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getShortValue(fieldArrayIndex, subFieldName) {
        return this.getShortValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getShortValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value === null) {
            return null;
        }
        return value;
    }
    getIntegerValues() {
        return this.getIntegerValues(null);
    }
    getIntegerValues(subfieldIndex) {
        return this.getIntegerValues(this.getSubField(subfieldIndex));
    }
    getIntegerValues(subfieldName) {
        return this.getIntegerValues(this.getSubField(subfieldName));
    }
    getIntegerValues(subfield) {
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getIntegerValueInternal(i, subfield);
        }
        return rv;
    }
    getIntegerValue() {
        return this.getIntegerValueInternal(0, null);
    }
    getIntegerValue(fieldArrayIndex) {
        return this.getIntegerValueInternal(fieldArrayIndex, null);
    }
    getIntegerValue(fieldArrayIndex, subFieldIndex) {
        return this.getIntegerValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getIntegerValue(fieldArrayIndex, subFieldName) {
        return this.getIntegerValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getIntegerValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value === null) {
            return null;
        }
        return value;
    }
    getLongValues() {
        return this.getLongValues(null);
    }
    getLongValues(subfieldIndex) {
        return this.getLongValues(this.getSubField(subfieldIndex));
    }
    getLongValues(subfieldName) {
        return this.getLongValues(this.getSubField(subfieldName));
    }
    getLongValues(subfield) {
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getLongValueInternal(i, subfield);
        }
        return rv;
    }
    getLongValue() {
        return this.getLongValueInternal(0, null);
    }
    getLongValue(fieldArrayIndex) {
        return this.getLongValueInternal(fieldArrayIndex, null);
    }
    getLongValue(fieldArrayIndex, subFieldIndex) {
        return this.getLongValueInternal(fieldArrayIndex, this.getSubField(subFieldIndex));
    }
    getLongValue(fieldArrayIndex, subFieldName) {
        return this.getLongValueInternal(fieldArrayIndex, this.getSubField(subFieldName));
    }
    getLongValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value === null) {
            return null;
        }
        return value;
    }
    getFloatValues() {
        return this.getFloatValues(null);
    }
    addValue(value) {
        this.values.push(value);
    }
    getFloatValues(subfieldIndexOrName) {
        const subField = typeof subfieldIndexOrName === 'number'
            ? this.getSubField(subfieldIndexOrName)
            : this.getSubField(subfieldIndexOrName);
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getFloatValueInternal(i, subField);
        }
        return rv;
    }
    getFloatValue(fieldArrayIndex = 0, subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getFloatValueInternal(fieldArrayIndex, subField);
    }
    getFloatValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value == null) {
            return null;
        }
        return new Float(value instanceof Number ? value.valueOf() : 0);
    }
    getDoubleValues(subfieldIndexOrName) {
        const subField = typeof subfieldIndexOrName === 'number'
            ? this.getSubField(subfieldIndexOrName)
            : this.getSubField(subfieldIndexOrName);
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getDoubleValueInternal(i, subField);
        }
        return rv;
    }
    getDoubleValue(fieldArrayIndex = 0, subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getDoubleValueInternal(fieldArrayIndex, subField);
    }
    getDoubleValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value == null) {
            return null;
        }
        return new Double(value instanceof Number ? value.valueOf() : 0);
    }
    getBigIntegerValues(subfieldIndexOrName) {
        const subField = typeof subfieldIndexOrName === 'number'
            ? this.getSubField(subfieldIndexOrName)
            : this.getSubField(subfieldIndexOrName);
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getBigIntegerValueInternal(i, subField);
        }
        return rv;
    }
    getBigIntegerValue(fieldArrayIndex = 0, subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getBigIntegerValueInternal(fieldArrayIndex, subField);
    }
    getBigIntegerValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        if (value == null) {
            return null;
        }
        return value instanceof BigInteger_1.default
            ? value
            : new BigInteger_1.default(value.toString());
    }
    getStringValues(subfieldIndexOrName) {
        const subField = typeof subfieldIndexOrName === 'number'
            ? this.getSubField(subfieldIndexOrName)
            : this.getSubField(subfieldIndexOrName);
        const rv = new Array(this.getNumValues());
        for (let i = 0; i < this.getNumValues(); i++) {
            rv[i] = this.getStringValueInternal(i, subField);
        }
        return rv;
    }
    getStringValue(fieldArrayIndex = 0, subFieldIndexOrName) {
        const subField = typeof subFieldIndexOrName === 'number'
            ? this.getSubField(subFieldIndexOrName)
            : this.getSubField(subFieldIndexOrName);
        return this.getStringValueInternal(fieldArrayIndex, subField);
    }
    getStringValueInternal(fieldArrayIndex, subField) {
        const value = this.getValueInternal(fieldArrayIndex, subField);
        const type = this.getTypeInternal(subField);
        if (value == null) {
            return null;
        }
        if (!this.forceShowInvalids &&
            type in Fit_1.default.baseTypeInvalidMap &&
            Fit_1.default.baseTypeInvalidMap[type] === value) {
            return null;
        }
        return value.toString();
    }
    read(inStream, size) {
        try {
            const data = new DataInputStream_1.default(inStream);
            if (this.getType() === Fit_1.default.BASE_TYPE_STRING) {
                try {
                    const bytes = new Array(size);
                    inStream.read(bytes, 0, size);
                    const byteBuffer = ByteBuffer.wrap(bytes);
                    const utf8Decoder = Charset.forName('UTF-8').newDecoder();
                    utf8Decoder.onMalformedInput(CodingErrorAction.IGNORE);
                    utf8Decoder.onUnmappableCharacter(CodingErrorAction.IGNORE);
                    const decoded = utf8Decoder.decode(byteBuffer);
                    const strings = decoded.toString().split('\0');
                    strings.forEach((string) => this.values.push(string));
                }
                catch (e) {
                    return true;
                }
            }
            else {
                let bytesLeft = size;
                let invalid = true;
                const type = this.getType();
                const baseTypeSize = Fit_1.default.baseTypeSizes[type & Fit_1.default.BASE_TYPE_NUM_MASK];
                const invalidValue = Fit_1.default.baseTypeInvalidMap[type];
                while (bytesLeft > 0) {
                    let value = null;
                    switch (type) {
                        case Fit_1.default.BASE_TYPE_ENUM:
                        case Fit_1.default.BASE_TYPE_UINT8:
                        case Fit_1.default.BASE_TYPE_UINT8Z: {
                            value = data.readByte() & 0xff;
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_SINT8: {
                            value = data.readByte();
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_SINT16: {
                            value = data.readShort();
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_UINT16:
                        case Fit_1.default.BASE_TYPE_UINT16Z: {
                            value = data.readByte() & 0xff;
                            value = (value << 8) | (data.readByte() & 0xff);
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_SINT32: {
                            value = data.readInt();
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_UINT32:
                        case Fit_1.default.BASE_TYPE_UINT32Z:
                        case Fit_1.default.BASE_TYPE_SINT64: {
                            value = data.readByte() & 0xff;
                            for (let i = 1; i < baseTypeSize; i++) {
                                value = (value << 8) | (data.readByte() & 0xff);
                            }
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_FLOAT32: {
                            value = data.readFloat();
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_FLOAT64: {
                            value = data.readDouble();
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_BYTE: {
                            value = data.readByte() & 0xff;
                            break;
                        }
                        case Fit_1.default.BASE_TYPE_UINT64:
                        case Fit_1.default.BASE_TYPE_UINT64Z: {
                            const bytes = new Array(baseTypeSize);
                            data.read(bytes, 0, baseTypeSize);
                            value = new BigInteger_1.default(1, bytes);
                            break;
                        }
                        default:
                            return false;
                    }
                    if (value !== null) {
                        this.values.push(value);
                    }
                    if (value !== invalidValue) {
                        invalid = false;
                    }
                    bytesLeft -=
                        Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK];
                }
                if (invalid && !this.forceShowInvalids) {
                    this.values = [];
                }
            }
        }
        catch (e) {
            return false;
        }
        return true;
    }
    write(outStream, fieldDef) {
        let bytesLeft = fieldDef.getSize() - this.getSize();
        this.write(outStream);
        // Fill remaining bytes with invalid.
        while (bytesLeft > 0) {
            this.writeValue(outStream, null);
            bytesLeft -= Fit_1.default.baseTypeSizes[this.getType() & Fit_1.default.BASE_TYPE_NUM_MASK];
        }
    }
    writeValue(outStream, value) {
        try {
            const data = new DataOutputStream_1.default(outStream);
            if (value === null) {
                switch (this.getType()) {
                    case Fit_1.default.BASE_TYPE_ENUM:
                        data.writeByte(Fit_1.default.ENUM_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT8:
                        data.writeByte(Fit_1.default.UINT8_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT8Z:
                        data.writeByte(Fit_1.default.UINT8Z_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_SINT8:
                        data.writeByte(Fit_1.default.SINT8_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_BYTE:
                        data.writeByte(Fit_1.default.BYTE_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_SINT16:
                        data.writeShort(Fit_1.default.SINT16_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT16:
                        data.writeShort(Fit_1.default.UINT16_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT16Z:
                        data.writeShort(Fit_1.default.UINT16Z_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_SINT32:
                        data.writeInt(Fit_1.default.SINT32_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT32:
                        data.writeInt(Fit_1.default.UINT32_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT32Z:
                        data.writeInt(Fit_1.default.UINT32Z_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_SINT64:
                        data.writeLong(Fit_1.default.SINT64_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT64:
                        data.writeLong(Fit_1.default.UINT64_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_UINT64Z:
                        data.writeLong(Fit_1.default.UINT64Z_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_STRING:
                        data.writeByte(0);
                        break;
                    case Fit_1.default.BASE_TYPE_FLOAT32:
                        data.writeFloat(Fit_1.default.FLOAT32_INVALID);
                        break;
                    case Fit_1.default.BASE_TYPE_FLOAT64:
                        data.writeDouble(Fit_1.default.FLOAT64_INVALID);
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (this.getType()) {
                    case Fit_1.default.BASE_TYPE_ENUM:
                    case Fit_1.default.BASE_TYPE_UINT8:
                    case Fit_1.default.BASE_TYPE_UINT8Z:
                    case Fit_1.default.BASE_TYPE_SINT8:
                    case Fit_1.default.BASE_TYPE_BYTE: {
                        if (typeof value === 'string') {
                            // Value should not be a string here but keep behaviour consistent
                        }
                        data.writeByte(Math.round(Number(value)));
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_SINT16:
                    case Fit_1.default.BASE_TYPE_UINT16:
                    case Fit_1.default.BASE_TYPE_UINT16Z: {
                        data.writeShort(Math.round(Number(value)));
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_SINT32:
                    case Fit_1.default.BASE_TYPE_UINT32:
                    case Fit_1.default.BASE_TYPE_UINT32Z: {
                        data.writeInt(Math.round(Number(value)));
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_STRING: {
                        const stringWriter = new OutputStreamWriter_1.default(outStream, 'UTF-8');
                        stringWriter.write(value.toString());
                        stringWriter.flush();
                        outStream.write(0);
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_FLOAT32: {
                        data.writeFloat(value);
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_FLOAT64: {
                        data.writeDouble(value);
                        break;
                    }
                    case Fit_1.default.BASE_TYPE_SINT64:
                    case Fit_1.default.BASE_TYPE_UINT64:
                    case Fit_1.default.BASE_TYPE_UINT64Z: {
                        data.writeLong(Number(value));
                        break;
                    }
                    default:
                        break;
                }
            }
        }
        catch (e) {
            // Ignore write errors in stubs
        }
    }
}
FieldBase.forceShowInvalids = !Fit_1.default.ENABLE_LEGACY_BEHAVIOUR;
exports.default = FieldBase;

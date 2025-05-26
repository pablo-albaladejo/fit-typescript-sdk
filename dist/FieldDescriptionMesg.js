"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Factory_1 = __importDefault(require("./Factory"));
const Field_1 = __importDefault(require("./Field"));
const Fit_1 = __importDefault(require("./Fit"));
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
const Profile_1 = require("./Profile");
class FieldDescriptionMesg extends Mesg_1.default {
    constructor(mesg) {
        super(mesg || Factory_1.default.createMesg(MesgNum_1.default.FIELD_DESCRIPTION));
        this.initFields();
    }
    initFields() {
        this.addField(new Field_1.default('developer_data_index', FieldDescriptionMesg.DeveloperDataIndexFieldNum, 2, 1, 0, '', false, Profile_1.Type.UINT8));
        this.addField(new Field_1.default('field_definition_number', FieldDescriptionMesg.FieldDefinitionNumberFieldNum, 2, 1, 0, '', false, Profile_1.Type.UINT8));
        this.addField(new Field_1.default('fit_base_type_id', FieldDescriptionMesg.FitBaseTypeIdFieldNum, 2, 1, 0, '', false, Profile_1.Type.FIT_BASE_TYPE));
        this.addField(new Field_1.default('field_name', FieldDescriptionMesg.FieldNameFieldNum, 7, 1, 0, '', false, Profile_1.Type.STRING));
        this.addField(new Field_1.default('array', FieldDescriptionMesg.ArrayFieldNum, 2, 1, 0, '', false, Profile_1.Type.UINT8));
        this.addField(new Field_1.default('components', FieldDescriptionMesg.ComponentsFieldNum, 7, 1, 0, '', false, Profile_1.Type.STRING));
        this.addField(new Field_1.default('scale', FieldDescriptionMesg.ScaleFieldNum, 2, 1, 0, '', false, Profile_1.Type.UINT8));
        this.addField(new Field_1.default('offset', FieldDescriptionMesg.OffsetFieldNum, 1, 1, 0, '', false, Profile_1.Type.SINT8));
        this.addField(new Field_1.default('units', FieldDescriptionMesg.UnitsFieldNum, 7, 1, 0, '', false, Profile_1.Type.STRING));
        this.addField(new Field_1.default('bits', FieldDescriptionMesg.BitsFieldNum, 7, 1, 0, '', false, Profile_1.Type.STRING));
        this.addField(new Field_1.default('accumulate', FieldDescriptionMesg.AccumulateFieldNum, 7, 1, 0, '', false, Profile_1.Type.STRING));
        this.addField(new Field_1.default('fit_base_unit_id', FieldDescriptionMesg.FitBaseUnitIdFieldNum, 132, 1, 0, '', false, Profile_1.Type.FIT_BASE_UNIT));
        this.addField(new Field_1.default('native_mesg_num', FieldDescriptionMesg.NativeMesgNumFieldNum, 132, 1, 0, '', false, Profile_1.Type.MESG_NUM));
        this.addField(new Field_1.default('native_field_num', FieldDescriptionMesg.NativeFieldNumFieldNum, 2, 1, 0, '', false, Profile_1.Type.UINT8));
    }
    getDeveloperDataIndex() {
        return this.getFieldShortValue(0, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setDeveloperDataIndex(developerDataIndex) {
        this.setFieldValue(0, 0, developerDataIndex, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getFieldDefinitionNumber() {
        return this.getFieldShortValue(1, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setFieldDefinitionNumber(fieldDefinitionNumber) {
        this.setFieldValue(1, 0, fieldDefinitionNumber, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getFitBaseTypeId() {
        return this.getFieldShortValue(2, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setFitBaseTypeId(fitBaseTypeId) {
        this.setFieldValue(2, 0, fitBaseTypeId, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getFieldName() {
        return this.getFieldStringValues(3, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getNumFieldName() {
        return this.getNumFieldValues(3, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getFieldName(index) {
        return this.getFieldStringValue(3, index, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setFieldName(index, fieldName) {
        this.setFieldValue(3, index, fieldName, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getArray() {
        return this.getFieldShortValue(4, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setArray(array) {
        this.setFieldValue(4, 0, array, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getComponents() {
        return this.getFieldStringValue(5, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setComponents(components) {
        this.setFieldValue(5, 0, components, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getScale() {
        return this.getFieldShortValue(6, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setScale(scale) {
        this.setFieldValue(6, 0, scale, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getOffset() {
        return this.getFieldByteValue(7, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setOffset(offset) {
        this.setFieldValue(7, 0, offset, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getUnits() {
        return this.getFieldStringValues(8, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getNumUnits() {
        return this.getNumFieldValues(8, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getUnits(index) {
        return this.getFieldStringValue(8, index, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setUnits(index, units) {
        this.setFieldValue(8, index, units, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getBits() {
        return this.getFieldStringValue(9, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setBits(bits) {
        this.setFieldValue(9, 0, bits, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getAccumulate() {
        return this.getFieldStringValue(10, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setAccumulate(accumulate) {
        this.setFieldValue(10, 0, accumulate, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getFitBaseUnitId() {
        return this.getFieldIntegerValue(13, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setFitBaseUnitId(fitBaseUnitId) {
        this.setFieldValue(13, 0, fitBaseUnitId, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getNativeMesgNum() {
        return this.getFieldIntegerValue(14, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setNativeMesgNum(nativeMesgNum) {
        this.setFieldValue(14, 0, nativeMesgNum, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    getNativeFieldNum() {
        return this.getFieldShortValue(15, 0, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
    setNativeFieldNum(nativeFieldNum) {
        this.setFieldValue(15, 0, nativeFieldNum, Fit_1.default.SUBFIELD_INDEX_MAIN_FIELD);
    }
}
FieldDescriptionMesg.DeveloperDataIndexFieldNum = 0;
FieldDescriptionMesg.FieldDefinitionNumberFieldNum = 1;
FieldDescriptionMesg.FitBaseTypeIdFieldNum = 2;
FieldDescriptionMesg.FieldNameFieldNum = 3;
FieldDescriptionMesg.ArrayFieldNum = 4;
FieldDescriptionMesg.ComponentsFieldNum = 5;
FieldDescriptionMesg.ScaleFieldNum = 6;
FieldDescriptionMesg.OffsetFieldNum = 7;
FieldDescriptionMesg.UnitsFieldNum = 8;
FieldDescriptionMesg.BitsFieldNum = 9;
FieldDescriptionMesg.AccumulateFieldNum = 10;
FieldDescriptionMesg.FitBaseUnitIdFieldNum = 13;
FieldDescriptionMesg.NativeMesgNumFieldNum = 14;
FieldDescriptionMesg.NativeFieldNumFieldNum = 15;
exports.default = FieldDescriptionMesg;

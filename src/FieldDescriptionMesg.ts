import Factory from './Factory';
import Field from './Field';
import Fit from './Fit';
import Mesg from './Mesg';
import MesgNum from './MesgNum';

class FieldDescriptionMesg extends Mesg {
  static DeveloperDataIndexFieldNum: number = 0;
  static FieldDefinitionNumberFieldNum: number = 1;
  static FitBaseTypeIdFieldNum: number = 2;
  static FieldNameFieldNum: number = 3;
  static ArrayFieldNum: number = 4;
  static ComponentsFieldNum: number = 5;
  static ScaleFieldNum: number = 6;
  static OffsetFieldNum: number = 7;
  static UnitsFieldNum: number = 8;
  static BitsFieldNum: number = 9;
  static AccumulateFieldNum: number = 10;
  static FitBaseUnitIdFieldNum: number = 13;
  static NativeMesgNumFieldNum: number = 14;
  static NativeFieldNumFieldNum: number = 15;

  constructor(mesg?: Mesg) {
    super(mesg || Factory.createMesg(MesgNum.FIELD_DESCRIPTION));
    this.initFields();
  }

  private initFields(): void {
    this.addField(
      new Field(
        'developer_data_index',
        FieldDescriptionMesg.DeveloperDataIndexFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.UINT8
      )
    );
    this.addField(
      new Field(
        'field_definition_number',
        FieldDescriptionMesg.FieldDefinitionNumberFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.UINT8
      )
    );
    this.addField(
      new Field(
        'fit_base_type_id',
        FieldDescriptionMesg.FitBaseTypeIdFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.FIT_BASE_TYPE
      )
    );
    this.addField(
      new Field(
        'field_name',
        FieldDescriptionMesg.FieldNameFieldNum,
        7,
        1,
        0,
        '',
        false,
        ProfileType.STRING
      )
    );
    this.addField(
      new Field(
        'array',
        FieldDescriptionMesg.ArrayFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.UINT8
      )
    );
    this.addField(
      new Field(
        'components',
        FieldDescriptionMesg.ComponentsFieldNum,
        7,
        1,
        0,
        '',
        false,
        ProfileType.STRING
      )
    );
    this.addField(
      new Field(
        'scale',
        FieldDescriptionMesg.ScaleFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.UINT8
      )
    );
    this.addField(
      new Field(
        'offset',
        FieldDescriptionMesg.OffsetFieldNum,
        1,
        1,
        0,
        '',
        false,
        ProfileType.SINT8
      )
    );
    this.addField(
      new Field(
        'units',
        FieldDescriptionMesg.UnitsFieldNum,
        7,
        1,
        0,
        '',
        false,
        ProfileType.STRING
      )
    );
    this.addField(
      new Field(
        'bits',
        FieldDescriptionMesg.BitsFieldNum,
        7,
        1,
        0,
        '',
        false,
        ProfileType.STRING
      )
    );
    this.addField(
      new Field(
        'accumulate',
        FieldDescriptionMesg.AccumulateFieldNum,
        7,
        1,
        0,
        '',
        false,
        ProfileType.STRING
      )
    );
    this.addField(
      new Field(
        'fit_base_unit_id',
        FieldDescriptionMesg.FitBaseUnitIdFieldNum,
        132,
        1,
        0,
        '',
        false,
        ProfileType.FIT_BASE_UNIT
      )
    );
    this.addField(
      new Field(
        'native_mesg_num',
        FieldDescriptionMesg.NativeMesgNumFieldNum,
        132,
        1,
        0,
        '',
        false,
        ProfileType.MESG_NUM
      )
    );
    this.addField(
      new Field(
        'native_field_num',
        FieldDescriptionMesg.NativeFieldNumFieldNum,
        2,
        1,
        0,
        '',
        false,
        ProfileType.UINT8
      )
    );
  }

  getDeveloperDataIndex(): number | null {
    return this.getFieldShortValue(0, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setDeveloperDataIndex(developerDataIndex: number | null): void {
    this.setFieldValue(0, 0, developerDataIndex, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getFieldDefinitionNumber(): number | null {
    return this.getFieldShortValue(1, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setFieldDefinitionNumber(fieldDefinitionNumber: number | null): void {
    this.setFieldValue(
      1,
      0,
      fieldDefinitionNumber,
      Fit.SUBFIELD_INDEX_MAIN_FIELD
    );
  }

  getFitBaseTypeId(): number | null {
    return this.getFieldShortValue(2, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setFitBaseTypeId(fitBaseTypeId: number | null): void {
    this.setFieldValue(2, 0, fitBaseTypeId, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getFieldName(): string[] {
    return this.getFieldStringValues(3, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getNumFieldName(): number {
    return this.getNumFieldValues(3, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getFieldName(index: number): string {
    return this.getFieldStringValue(3, index, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setFieldName(index: number, fieldName: string): void {
    this.setFieldValue(3, index, fieldName, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getArray(): number | null {
    return this.getFieldShortValue(4, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setArray(array: number | null): void {
    this.setFieldValue(4, 0, array, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getComponents(): string {
    return this.getFieldStringValue(5, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setComponents(components: string): void {
    this.setFieldValue(5, 0, components, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getScale(): number | null {
    return this.getFieldShortValue(6, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setScale(scale: number | null): void {
    this.setFieldValue(6, 0, scale, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getOffset(): number | null {
    return this.getFieldByteValue(7, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setOffset(offset: number | null): void {
    this.setFieldValue(7, 0, offset, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getUnits(): string[] {
    return this.getFieldStringValues(8, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getNumUnits(): number {
    return this.getNumFieldValues(8, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getUnits(index: number): string {
    return this.getFieldStringValue(8, index, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setUnits(index: number, units: string): void {
    this.setFieldValue(8, index, units, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getBits(): string {
    return this.getFieldStringValue(9, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setBits(bits: string): void {
    this.setFieldValue(9, 0, bits, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getAccumulate(): string {
    return this.getFieldStringValue(10, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setAccumulate(accumulate: string): void {
    this.setFieldValue(10, 0, accumulate, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getFitBaseUnitId(): number | null {
    return this.getFieldIntegerValue(13, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setFitBaseUnitId(fitBaseUnitId: number | null): void {
    this.setFieldValue(13, 0, fitBaseUnitId, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getNativeMesgNum(): number | null {
    return this.getFieldIntegerValue(14, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setNativeMesgNum(nativeMesgNum: number | null): void {
    this.setFieldValue(14, 0, nativeMesgNum, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  getNativeFieldNum(): number | null {
    return this.getFieldShortValue(15, 0, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }

  setNativeFieldNum(nativeFieldNum: number | null): void {
    this.setFieldValue(15, 0, nativeFieldNum, Fit.SUBFIELD_INDEX_MAIN_FIELD);
  }
}
export default FieldDescriptionMesg;

import FieldBase from './FieldBase';
import Fit from './Fit';
import SubField from './SubField';

class Field extends FieldBase {
  protected name: string;
  protected num: number;
  protected type: number;
  protected scale: number;
  protected offset: number;
  protected units: string;
  protected isAccumulated: boolean;
  protected components: FieldComponent[];
  protected subFields: SubField[];

  private profileType: ProfileType;
  private isExpandedField: boolean;

  constructor(field?: Field) {
    super(field);

    if (!field) {
      this.name = 'unknown';
      this.num = Fit.FIELD_NUM_INVALID;
      this.type = 0;
      this.profileType = ProfileType.ENUM;
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

  getNum(): number {
    return this.num;
  }

  getUnits(): string {
    return this.units;
  }

  getType(): number {
    return this.type;
  }

  getProfileType(): ProfileType {
    return this.profileType;
  }

  protected getOffset(): number {
    return this.offset;
  }

  protected getScale(): number {
    return this.scale;
  }

  protected getFieldName(): string {
    return this.name;
  }

  getIsAccumulated(): boolean {
    return this.isAccumulated;
  }

  protected setIsExpanded(newValue: boolean): void {
    this.isExpandedField = newValue;
  }

  protected getIsExpanded(): boolean {
    return this.isExpandedField;
  }

  protected getSubField(subFieldName: string): SubField | null {
    for (const subField of this.subFields) {
      if (subField.name === subFieldName) {
        return subField;
      }
    }

    return null;
  }

  protected getSubField(subFieldIndex: number): SubField | null {
    if (subFieldIndex >= 0 && subFieldIndex < this.subFields.length) {
      return this.subFields[subFieldIndex];
    } else {
      return null;
    }
  }
}
export default Field;
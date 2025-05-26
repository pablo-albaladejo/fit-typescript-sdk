import Field from './Field';
import Mesg from './Mesg';

class SubFieldMap {
  private refFieldNum: number;
  private refFieldValue: number;

  constructor(refFieldNum: number, refFieldValue: number) {
    this.refFieldNum = refFieldNum;
    this.refFieldValue = refFieldValue;
  }

  canMesgSupport(mesg: Mesg): boolean {
    const field: Field | null = mesg.getField(this.refFieldNum);

    if (field !== null) {
      const value: number | null = field.getLongValue(
        0,
        Fit.SUBFIELD_INDEX_MAIN_FIELD
      );
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
  protected name: string;
  protected type: number;
  protected scale: number;
  protected offset: number;
  protected units: string;
  private maps: SubFieldMap[];
  protected components: FieldComponent[];

  constructor(subField?: SubField) {
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

  getName(): string {
    return this.name;
  }

  getType(): number {
    return this.type;
  }

  getUnits(): string {
    return this.units;
  }

  addMap(refFieldNum: number, refFieldValue: number): void {
    this.maps.push(new SubFieldMap(refFieldNum, refFieldValue));
  }

  addComponent(component: FieldComponent): void {
    this.components.push(component);
  }

  canMesgSupport(mesg: Mesg): boolean {
    for (const map of this.maps) {
      if (map.canMesgSupport(mesg)) {
        return true;
      }
    }
    return false;
  }
}

export default SubField;

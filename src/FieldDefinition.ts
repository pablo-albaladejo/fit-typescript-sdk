import FieldDefinitionBase from './FieldDefinitionBase';

class FieldDefinition extends FieldDefinitionBase {
  private num: number;
  private size: number;
  private type: number;

  constructor(field: any) {
    super();
    this.num = field.getNum?.() ?? 0;
    this.size = field.getSize?.() ?? 0;
    this.type = field.getType?.() ?? 0;
  }

  write(out: any): void {
    try {
      out.write(this.num);
      out.write(this.size);
      out.write(this.type);
    } catch (e) {
      // Handle IOException if needed
      // ...
    }
  }

  getNum(): number {
    return this.num;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }

  getType(): number {
    return this.type;
  }

  equals(other: object): boolean {
    if (this === other) {
      return true;
    }

    if (!(other instanceof FieldDefinition)) {
      return false;
    }

    const otherFieldDef = other as FieldDefinition;

    return (
      this.num === otherFieldDef.num &&
      this.size === otherFieldDef.size &&
      this.type === otherFieldDef.type
    );
  }

}
export default FieldDefinition;

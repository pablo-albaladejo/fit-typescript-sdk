import FieldDefinitionBase from './FieldDefinitionBase';

class FieldDefinition extends FieldDefinitionBase {
  private num: number;
  private size: number;
  private type: number;

  constructor(field: Field) {
    super();
    this.num = field.getNum();
    this.size = field.getSize();
    this.type = field.getType();
  }

  write(out: OutputStream): void {
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

  hashCode(): number {
    let hashCode = 1;

    hashCode = hashCode * 47 + this.num.hashCode();
    hashCode = hashCode * 31 + this.size.hashCode();
    hashCode = hashCode * 19 + this.type.hashCode();

    return hashCode;
  }
}
export default FieldDefinition;

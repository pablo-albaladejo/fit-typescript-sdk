import * as fs from 'fs';
import FieldDefinitionBase from './FieldDefinitionBase';

interface FieldLike {
  getNum?: () => number;
  getSize?: () => number;
  getType?: () => number;
}

class FieldDefinition extends FieldDefinitionBase {
  private num: number;
  private size: number;
  private type: number;

  constructor(field: FieldLike) {
    super();
    this.num = field.getNum?.() ?? 0;
    this.size = field.getSize?.() ?? 0;
    this.type = field.getType?.() ?? 0;
  }

  write(out: fs.WriteStream): void {
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

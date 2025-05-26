import * as fs from 'fs';

interface DeveloperFieldLike {
  getNum?: () => number;
  getSize?: () => number;
  getDeveloperDataIndex?: () => number;
}

class DeveloperFieldDefinition {
  private num: number;
  private size: number;
  private developerDataIndex: number;

  constructor(field?: DeveloperFieldLike) {
    this.num = field?.getNum?.() ?? 0;
    this.size = field?.getSize?.() ?? 0;
    this.developerDataIndex = field?.getDeveloperDataIndex?.() ?? 0;
  }

  write(out: fs.WriteStream): void {
    out.write(this.num);
    out.write(this.size);
    out.write(this.developerDataIndex);
  }

  getSize(): number {
    return this.size;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getDeveloperDataIndex(): number {
    return this.developerDataIndex;
  }

  getNum(): number {
    return this.num;
  }

  equals(other: object): boolean {
    if (this === other) {
      return true;
    }
    if (!(other instanceof DeveloperFieldDefinition)) {
      return false;
    }
    const o = other as DeveloperFieldDefinition;
    return (
      this.num === o.num &&
      this.size === o.size &&
      this.developerDataIndex === o.developerDataIndex
    );
  }
}
export default DeveloperFieldDefinition;

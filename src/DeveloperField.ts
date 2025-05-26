import Field from './Field';

class DeveloperField extends Field {
  private developerDataIndex: number;

  constructor(field?: DeveloperField) {
    super(field);
    if (field) {
      this.developerDataIndex = field.developerDataIndex;
    } else {
      this.developerDataIndex = 0;
    }
  }

  getDeveloperDataIndex(): number {
    return this.developerDataIndex;
  }

  setDeveloperDataIndex(index: number): void {
    this.developerDataIndex = index;
  }
}
export default DeveloperField;

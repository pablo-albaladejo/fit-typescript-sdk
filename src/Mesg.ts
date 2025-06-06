import * as fs from 'fs';
import Field from './Field';
import DeveloperField from './DeveloperField';
import MesgDefinition from './MesgDefinition';
import MesgNum from './MesgNum';

class Mesg {
  protected name: string;
  protected num: number;
  protected localNum: number;
  protected fields: Field[];
  protected developerFields: DeveloperField[];
  protected systemTimeOffset: number;
  private decoderMesgIndex: number = 0;

  constructor(nameOrMesg?: string | Mesg, num?: number) {
    this.fields = [];
    this.developerFields = [];

    if (typeof nameOrMesg === 'string') {
      this.name = nameOrMesg;
      this.num = num || MesgNum.INVALID;
      this.localNum = 0;
      this.systemTimeOffset = 0;
    } else if (nameOrMesg instanceof Mesg) {
      const mesg = nameOrMesg;
      this.name = mesg.name;
      this.num = mesg.num;
      this.localNum = mesg.localNum;
      this.systemTimeOffset = mesg.systemTimeOffset;

      for (const field of mesg.fields) {
        if (field.getNumValues() > 0) {
          this.fields.push(new Field(field));
        }
      }

      for (const field of mesg.developerFields) {
        if (field.getNumValues() > 0) {
          this.developerFields.push(new DeveloperField(field));
        }
      }
    } else {
      this.name = 'unknown';
      this.num = MesgNum.INVALID;
      this.localNum = 0;
      this.systemTimeOffset = 0;
    }
  }

  getLocalNum(): number {
    return this.localNum;
  }

  getNum(): number {
    return this.num;
  }

  getDeveloperFields(): DeveloperField[] {
    return this.developerFields;
  }

  getFields(): Field[] {
    return this.fields;
  }

  write(_out: fs.WriteStream, _defn: MesgDefinition): void {
    // Stub implementation for tests
  }
}
export default Mesg;

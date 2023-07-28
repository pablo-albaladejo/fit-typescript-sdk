import Field from './Field';
import MesgNum from './MesgNum';

class Mesg {
  protected name: string;
  protected num: number;
  protected localNum: number;
  protected fields: Field[];
  protected developerFields: DeveloperField[];
  protected systemTimeOffset: number;
  private decoderMesgIndex: number;

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
}
export default Mesg;

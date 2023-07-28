import * as fs from 'fs';
import DeveloperFieldDefinition from './DeveloperFieldDefinition';
import FieldDefinition from './FieldDefinition';
import Fit from './Fit';
import FitRuntimeException from './FitRuntimeException';
import Mesg from './Mesg';
import MesgNum from './MesgNum';
import * as Utils from './Utils';

class MesgDefinition {
  public readonly num: number;
  public readonly localNum: number;
  public readonly arch: number;
  public readonly fields: FieldDefinition[];
  public readonly developerFields: DeveloperFieldDefinition[];

  constructor(mesg?: Mesg) {
    this.num = MesgNum.INVALID;
    this.localNum = 0;
    this.arch = Fit.ARCH_ENDIAN_BIG;
    this.fields = [];
    this.developerFields = [];

    if (mesg) {
      this.num = mesg.num;
      this.localNum = mesg.localNum;

      if (this.localNum >= Fit.MAX_LOCAL_MESGS) {
        throw new FitRuntimeException(
          `Invalid local message number ${this.localNum}. Local message number must be < ${Fit.MAX_LOCAL_MESGS}.`
        );
      }

      for (const field of mesg.fields) {
        this.fields.push(new FieldDefinition(field));
      }

      for (const devField of mesg.developerFields) {
        this.developerFields.push(new DeveloperFieldDefinition(devField));
      }
    }
  }

  getNum(): number {
    return this.num;
  }

  getLocalNum(): number {
    return this.localNum;
  }

  getArch(): number {
    return this.arch;
  }

  getFields(): FieldDefinition[] {
    return this.fields;
  }

  getField(num: number): FieldDefinition | null {
    return this.fields.find((field) => field.getNum() === num) || null;
  }

  addField(fieldDef: FieldDefinition): void {
    this.fields.push(fieldDef);
  }

  addDeveloperField(fieldDef: DeveloperFieldDefinition): void {
    this.developerFields.push(fieldDef);
  }

  getDeveloperFieldTotalSize(): number {
    let totalSize = 0;
    for (const devField of this.developerFields) {
      totalSize += devField.getSize();
    }
    return totalSize;
  }

  write(out: fs.WriteStream): void {
    try {
      let headerByte =
        Fit.HDR_TYPE_DEF_BIT | (this.localNum & Fit.HDR_TYPE_MASK);
      if (!(this.developerFields.length === 0)) {
        headerByte |= Fit.HDR_DEV_FIELDS_BIT;
      }

      out.write(headerByte); // Message definition record header.
      out.write(0); // Reserved
      out.write(Fit.ARCH_ENDIAN_BIG);
      out.write(this.num >> 8);
      out.write(this.num);
      out.write(this.fields.length);

      for (const field of this.fields) {
        field.write(out);
      }

      if (!(this.developerFields.length === 0)) {
        out.write(this.developerFields.length);

        for (const devField of this.developerFields) {
          devField.write(out);
        }
      }
    } catch (e) {
      throw new FitRuntimeException(e);
    }
  }

  supports(mesg: MesgDefinition): boolean {
    if (!mesg) {
      return false;
    }

    if (this.num !== mesg.getNum()) {
      return false;
    }

    if (this.localNum !== mesg.getLocalNum()) {
      return false;
    }

    for (const fieldDef of mesg.getFields()) {
      const supportedFieldDef = this.getField(fieldDef.getNum());

      if (
        !supportedFieldDef ||
        fieldDef.getSize() > supportedFieldDef.getSize()
      ) {
        return false;
      }
    }

    for (const devField of mesg.getDeveloperFields()) {
      const supportedDef = this.getDeveloperField(
        devField.getDeveloperDataIndex(),
        devField.getNum()
      );

      if (!supportedDef || devField.getSize() > supportedDef.getSize()) {
        return false;
      }
    }

    return true;
  }

  private getDeveloperField(
    developerIndex: number,
    num: number
  ): DeveloperFieldDefinition | null {
    return (
      this.developerFields.find(
        (field) =>
          field.getDeveloperDataIndex() === developerIndex &&
          field.getNum() === num
      ) || null
    );
  }

  equals(other: object): boolean {
    if (this === other) {
      return true;
    }

    if (!(other instanceof MesgDefinition)) {
      return false;
    }

    const otherMesgDef = other as MesgDefinition;

    if (
      this.num !== otherMesgDef.num ||
      this.localNum !== otherMesgDef.localNum ||
      this.fields.length !== otherMesgDef.fields.length
    ) {
      return false;
    }

    for (let i = 0; i < this.fields.length; i++) {
      if (!this.fields[i].equals(otherMesgDef.fields[i])) {
        return false;
      }
    }

    return true;
  }

  hashCode(): number {
    let hashCode = 1;

    hashCode = hashCode * 31 + Utils.hashCode(this.num);
    hashCode = hashCode * 47 + Utils.hashCode(this.localNum);
    hashCode = hashCode * 19 + Utils.hashCode(this.fields);

    return hashCode;
  }

  getDeveloperFields(): Iterable<DeveloperFieldDefinition> {
    return this.developerFields;
  }
}
export default MesgDefinition;

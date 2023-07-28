import FieldDescriptionMesg from './FieldDescriptionMesg';
import Fit from './Fit';

class DeveloperFieldDefinition {
  private fieldDescriptionMesg: FieldDescriptionMesg | null;
  private developerDataIdMesg: DeveloperDataIdMesg | null;
  private size: number;
  private type: number;
  private num: number;

  constructor() {
    this.fieldDescriptionMesg = null;
    this.type = FitBaseType.UINT8;
  }

  setFieldDescription(mesg: FieldDescriptionMesg): void {
    this.fieldDescriptionMesg = mesg;
    this.num = this.fieldDescriptionMesg.getFieldDefinitionNumber();
    this.type = this.fieldDescriptionMesg.getFitBaseTypeId();
  }

  getAppVersion(): number {
    const val = this.isDefined()
      ? this.developerDataIdMesg.getApplicationVersion()
      : null;
    return val ?? Fit.UINT8_INVALID;
  }

  getAppId(): number[] | null {
    return this.isDefined()
      ? this.developerDataIdMesg.getApplicationId()
      : null;
  }

  getDeveloperDataIndex(): number {
    const val = this.isDefined()
      ? this.fieldDescriptionMesg.getDeveloperDataIndex()
      : null;
    return val ?? Fit.UINT8_INVALID;
  }

  isDefined(): boolean {
    return (
      this.fieldDescriptionMesg !== null && this.developerDataIdMesg !== null
    );
  }

  getFieldName(): string | null {
    return this.isDefined() ? this.fieldDescriptionMesg.getFieldName(0) : null;
  }

  getScale(): number {
    const scale = this.fieldDescriptionMesg?.getScale();
    return scale !== null && scale !== undefined
      ? scale
      : Fit.FIELD_DEFAULT_SCALE;
  }

  getOffset(): number {
    const offset = this.fieldDescriptionMesg?.getOffset();
    return offset !== null && offset !== undefined
      ? offset
      : Fit.FIELD_DEFAULT_OFFSET;
  }

  getUnits(): string | null {
    return this.isDefined() ? this.fieldDescriptionMesg.getUnits(0) : null;
  }

  getDefaultField(): DeveloperField {
    return new DeveloperField(this);
  }

  protected write(out: OutputStream): void {
    try {
      out.write(this.fieldDescriptionMesg!.getFieldDefinitionNumber());
      out.write(this.size);
      out.write(this.fieldDescriptionMesg!.getDeveloperDataIndex());
    } catch (e) {
      throw new Error(e);
    }
  }

  getNum(): number {
    return this.num;
  }

  setNum(num: number): void {
    this.num = num;
  }

  getSize(): number {
    return this.size;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getType(): number {
    return this.type;
  }

  getNativeOverride(): number {
    const nativeNum = this.fieldDescriptionMesg?.getNativeFieldNum();
    return nativeNum !== null && nativeNum !== undefined
      ? nativeNum
      : Fit.UINT8_INVALID;
  }

  setDeveloperDataIdMesg(developerDataIdMesg: DeveloperDataIdMesg): void {
    this.developerDataIdMesg = developerDataIdMesg;
  }
}
export default DeveloperFieldDefinition;

class FieldComponent {
  constructor(
    private fieldNum: number = 0,
    private bits: number = 0,
    private accumulate: boolean = false,
    private scale: number = 1,
    private offset: number = 0,
    private units: string = ''
  ) {}

  getFieldNum(): number {
    return this.fieldNum;
  }

  getBits(): number {
    return this.bits;
  }

  getAccumulate(): boolean {
    return this.accumulate;
  }

  getScale(): number {
    return this.scale;
  }

  getOffset(): number {
    return this.offset;
  }

  getUnits(): string {
    return this.units;
  }
}
export default FieldComponent;

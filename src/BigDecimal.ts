export default class BigDecimal {
  private value: number;

  constructor(value: number | string | bigint) {
    this.value = typeof value === 'bigint' ? Number(value) : Number(value);
  }

  public compareTo(o: BigDecimal): number {
    if (this.value < o.value) return -1;
    if (this.value > o.value) return 1;
    return 0;
  }

  public toString(): string {
    return this.value.toString();
  }

  public valueOf(): number {
    return this.value;
  }
}

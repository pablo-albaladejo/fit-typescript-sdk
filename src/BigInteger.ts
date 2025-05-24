export default class BigInteger {
  private value: bigint;

  constructor(value: number | string | bigint | Uint8Array | number[], bytes?: number[]) {
    if (typeof value === 'number' && Array.isArray(bytes)) {
      this.value = BigInteger.fromBytes(bytes, value < 0);
    } else if (Array.isArray(value) || value instanceof Uint8Array) {
      this.value = BigInteger.fromBytes(Array.from(value));
    } else {
      // value is guaranteed to be either a string, number or bigint here
      this.value = BigInt(value as string | number | bigint);
    }
  }

  private static fromBytes(bytes: number[], negative: boolean = false): bigint {
    let result = BigInt(0);
    for (let i = bytes.length - 1; i >= 0; i--) {
      result = (result << BigInt(8)) + BigInt(bytes[i] & 0xff);
    }
    return negative ? -result : result;
  }

  public compareTo(o: BigInteger): number {
    if (this.value < o.value) return -1;
    if (this.value > o.value) return 1;
    return 0;
  }

  public toString(radix: number = 10): string {
    return this.value.toString(radix);
  }

  public valueOf(): bigint {
    return this.value;
  }
}

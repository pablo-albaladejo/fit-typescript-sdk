export default class BigInteger {
    private value;
    constructor(value: number | string | bigint | Uint8Array | number[], bytes?: number[]);
    private static fromBytes;
    compareTo(o: BigInteger): number;
    toString(radix?: number): string;
    valueOf(): bigint;
}

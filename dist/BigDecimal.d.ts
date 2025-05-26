export default class BigDecimal {
    private value;
    constructor(value: number | string | bigint);
    compareTo(o: BigDecimal): number;
    toString(): string;
    valueOf(): number;
}

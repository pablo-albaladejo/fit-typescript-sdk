declare class FieldComponent {
    private fieldNum;
    private bits;
    private accumulate;
    private scale;
    private offset;
    private units;
    constructor(fieldNum?: number, bits?: number, accumulate?: boolean, scale?: number, offset?: number, units?: string);
    getFieldNum(): number;
    getBits(): number;
    getAccumulate(): boolean;
    getScale(): number;
    getOffset(): number;
    getUnits(): string;
}
export default FieldComponent;

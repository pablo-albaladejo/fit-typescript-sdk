import Mesg from './Mesg';
declare class SubField {
    protected name: string;
    protected type: number;
    protected scale: number;
    protected offset: number;
    protected units: string;
    private maps;
    protected components: FieldComponent[];
    constructor(subField?: SubField);
    getName(): string;
    getType(): number;
    getUnits(): string;
    addMap(refFieldNum: number, refFieldValue: number): void;
    addComponent(component: FieldComponent): void;
    canMesgSupport(mesg: Mesg): boolean;
}
export default SubField;

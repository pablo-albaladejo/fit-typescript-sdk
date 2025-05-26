import FieldBase from './FieldBase';
import SubField from './SubField';
import { Type as ProfileType } from './Profile';
declare class Field extends FieldBase {
    protected name: string;
    protected num: number;
    protected type: number;
    protected scale: number;
    protected offset: number;
    protected units: string;
    protected isAccumulated: boolean;
    protected components: FieldComponent[];
    protected subFields: SubField[];
    private profileType;
    private isExpandedField;
    constructor(field?: Field);
    getNum(): number;
    getUnits(): string;
    getType(): number;
    getProfileType(): ProfileType;
    protected getOffset(): number;
    protected getScale(): number;
    protected getFieldName(): string;
    getIsAccumulated(): boolean;
    protected setIsExpanded(newValue: boolean): void;
    protected getIsExpanded(): boolean;
    protected getSubField(subFieldName: string): SubField | null;
}
export default Field;

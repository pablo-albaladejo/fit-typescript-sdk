/// <reference types="node" />
import * as fs from 'fs';
import DeveloperFieldDefinition from './DeveloperFieldDefinition';
import FieldDefinition from './FieldDefinition';
import Mesg from './Mesg';
declare class MesgDefinition {
    readonly num: number;
    readonly localNum: number;
    readonly arch: number;
    readonly fields: FieldDefinition[];
    readonly developerFields: DeveloperFieldDefinition[];
    constructor(mesg?: Mesg);
    getNum(): number;
    getLocalNum(): number;
    getArch(): number;
    getFields(): FieldDefinition[];
    getField(num: number): FieldDefinition | null;
    addField(fieldDef: FieldDefinition): void;
    addDeveloperField(fieldDef: DeveloperFieldDefinition): void;
    getDeveloperFieldTotalSize(): number;
    write(out: fs.WriteStream): void;
    supports(mesg: MesgDefinition): boolean;
    private getDeveloperField;
    equals(other: object): boolean;
    hashCode(): number;
    getDeveloperFields(): Iterable<DeveloperFieldDefinition>;
}
export default MesgDefinition;

/// <reference types="node" />
import * as fs from 'fs';
import FieldDefinitionBase from './FieldDefinitionBase';
interface FieldLike {
    getNum?: () => number;
    getSize?: () => number;
    getType?: () => number;
}
declare class FieldDefinition extends FieldDefinitionBase {
    private num;
    private size;
    private type;
    constructor(field: FieldLike);
    write(out: fs.WriteStream): void;
    getNum(): number;
    setSize(size: number): void;
    getSize(): number;
    getType(): number;
    equals(other: object): boolean;
}
export default FieldDefinition;

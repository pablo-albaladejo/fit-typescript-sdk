/// <reference types="node" />
import * as fs from 'fs';
interface DeveloperFieldLike {
    getNum?: () => number;
    getSize?: () => number;
    getDeveloperDataIndex?: () => number;
}
declare class DeveloperFieldDefinition {
    private num;
    private size;
    private developerDataIndex;
    constructor(field?: DeveloperFieldLike);
    write(out: fs.WriteStream): void;
    getSize(): number;
    setSize(size: number): void;
    getDeveloperDataIndex(): number;
    getNum(): number;
    equals(other: object): boolean;
}
export default DeveloperFieldDefinition;

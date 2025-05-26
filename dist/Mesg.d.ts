/// <reference types="node" />
import * as fs from 'fs';
import Field from './Field';
import DeveloperField from './DeveloperField';
import MesgDefinition from './MesgDefinition';
declare class Mesg {
    protected name: string;
    protected num: number;
    protected localNum: number;
    protected fields: Field[];
    protected developerFields: DeveloperField[];
    protected systemTimeOffset: number;
    private decoderMesgIndex;
    constructor(nameOrMesg?: string | Mesg, num?: number);
    getLocalNum(): number;
    getNum(): number;
    getDeveloperFields(): DeveloperField[];
    getFields(): Field[];
    write(_out: fs.WriteStream, _defn: MesgDefinition): void;
}
export default Mesg;

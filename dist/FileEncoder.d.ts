/// <reference types="node" />
import * as fs from 'fs';
import Mesg from './Mesg';
import MesgDefinition from './MesgDefinition';
import MesgDefinitionListener from './MesgDefinitionListener';
import MesgListener from './MesgListener';
import ProtocolVersion from './ProtocolVersion';
export declare class FileEncoder implements MesgListener, MesgDefinitionListener {
    private file;
    private out;
    private rawWrite;
    private crcOut;
    private crc16;
    private lastMesgDefinition;
    private version;
    private validator;
    constructor(file: fs.PathLike, version: ProtocolVersion);
    open(_file: fs.PathLike): void;
    writeFileHeader(): void;
    onMesg(mesg: Mesg): void;
    onMesgDefinition(mesgDefinition: MesgDefinition): void;
    writeMesgDefinition(mesgDefinition: MesgDefinition): void;
    writeMesg(mesg: Mesg): void;
    writeMesgArr(mesgs: Mesg[]): void;
    close(): void;
}

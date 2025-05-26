/// <reference types="node" />
/// <reference types="node" />
import * as fs from 'fs';
export interface FitHeader {
    headerSize: number;
    protocolVersion: number;
    profileVersion: number;
    dataSize: number;
    dataType: string;
    crc: number;
}
export default class FileDecoder {
    private buffer;
    private header;
    constructor(file: fs.PathLike | Buffer);
    readHeader(): FitHeader;
}

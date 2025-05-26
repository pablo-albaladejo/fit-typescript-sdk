import { FileEncoder } from '../dist/FileEncoder';
import FileDecoder from '../dist/FileDecoder';
import ProtocolVersion from '../dist/ProtocolVersion';
import FileIdMesg from '../dist/FileIdMesg';

// This script mirrors the example in docs/usage.md
const path = './example.fit';
const encoder = new FileEncoder(path, ProtocolVersion.V1_0);
encoder.writeMesg(new FileIdMesg());
encoder.close();

const decoder = new FileDecoder(path);
const header = decoder.readHeader();
console.log('data type:', header.dataType);
console.log('data size:', header.dataSize);


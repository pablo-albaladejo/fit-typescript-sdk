"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileEncoder_1 = require("../FileEncoder");
const FileDecoder_1 = __importDefault(require("../FileDecoder"));
const ProtocolVersion_1 = __importDefault(require("../ProtocolVersion"));
const Fit_1 = __importDefault(require("../Fit"));
const FileIdMesg_1 = __importDefault(require("../FileIdMesg"));
const fs = __importStar(require("fs"));
test('FileEncoder writes header and CRC', () => {
    const path = './header_test.fit';
    const encoder = new FileEncoder_1.FileEncoder(path, ProtocolVersion_1.default.V1_0);
    encoder.close();
    const decoder = new FileDecoder_1.default(path);
    const header = decoder.readHeader();
    expect(header.dataSize).toBe(0);
    expect(header.dataType).toBe('.FIT');
    const buf = fs.readFileSync(path);
    expect(buf.slice(-2).readUInt16LE(0)).toBe(encoder['crc16'].getValue());
    fs.unlinkSync(path);
});
test('encoding message updates data size', () => {
    const path = './mesg_test.fit';
    const enc = new FileEncoder_1.FileEncoder(path, ProtocolVersion_1.default.V2_0);
    enc.writeMesg(new FileIdMesg_1.default());
    enc.close();
    const buf = fs.readFileSync(path);
    const dec = new FileDecoder_1.default(path);
    const header = dec.readHeader();
    expect(header.dataSize).toBe(buf.length - Fit_1.default.FILE_HDR_SIZE - Fit_1.default.CRC_SIZE);
    fs.unlinkSync(path);
});

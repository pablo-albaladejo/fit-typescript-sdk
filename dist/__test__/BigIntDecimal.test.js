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
const BigInteger_1 = __importDefault(require("../BigInteger"));
const BigDecimal_1 = __importDefault(require("../BigDecimal"));
const FileEncoder_1 = require("../FileEncoder");
const FileDecoder_1 = __importDefault(require("../FileDecoder"));
const ProtocolVersion_1 = __importDefault(require("../ProtocolVersion"));
const fs = __importStar(require("fs"));
test('BigInteger and BigDecimal basic operations', () => {
    const bi = new BigInteger_1.default('12345678901234567890');
    const bytes = [0xd2, 0x02, 0x96, 0x49]; // little endian for 1234567890
    const bi2 = new BigInteger_1.default(bytes);
    expect(bi.compareTo(new BigInteger_1.default('12345678901234567890'))).toBe(0);
    expect(bi2.toString()).toBe('1234567890');
    const bd1 = new BigDecimal_1.default('10');
    const bd2 = new BigDecimal_1.default('5');
    expect(bd1.compareTo(bd2)).toBe(1);
});
test('FileEncoder and FileDecoder header roundtrip', () => {
    const path = './tmp.fit';
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

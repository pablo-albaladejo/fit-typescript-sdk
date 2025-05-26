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
const fs = __importStar(require("fs"));
const CRC16_1 = __importDefault(require("./CRC16"));
const Fit_1 = __importDefault(require("./Fit"));
const FitRuntimeException_1 = __importDefault(require("./FitRuntimeException"));
class FileDecoder {
    constructor(file) {
        this.header = null;
        this.buffer = Buffer.isBuffer(file) ? file : fs.readFileSync(file);
    }
    readHeader() {
        if (this.header)
            return this.header;
        if (this.buffer.length < Fit_1.default.FILE_HDR_SIZE) {
            throw new FitRuntimeException_1.default('Invalid FIT file');
        }
        const size = this.buffer[0];
        const protoVer = this.buffer[1];
        const profVer = this.buffer[2] | (this.buffer[3] << 8);
        const dataSize = this.buffer.readUInt32LE(4);
        const dataType = this.buffer.slice(8, 12).toString();
        const crc = this.buffer.readUInt16LE(size - 2);
        const crcCalc = new CRC16_1.default();
        crcCalc.update(this.buffer.slice(0, size - 2), 0, size - 2);
        if (crc !== crcCalc.getValue()) {
            throw new FitRuntimeException_1.default('Header CRC mismatch');
        }
        this.header = {
            headerSize: size,
            protocolVersion: protoVer,
            profileVersion: profVer,
            dataSize,
            dataType,
            crc,
        };
        return this.header;
    }
}
exports.default = FileDecoder;

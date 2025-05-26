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
exports.FileEncoder = void 0;
const fs = __importStar(require("fs"));
const CRC16_1 = __importDefault(require("./CRC16"));
const Fit_1 = __importDefault(require("./Fit"));
const FitRuntimeException_1 = __importDefault(require("./FitRuntimeException"));
const MesgDefinition_1 = __importDefault(require("./MesgDefinition"));
const ProtocolValidatorFactory_1 = __importDefault(require("./ProtocolValidatorFactory"));
class FileEncoder {
    constructor(file, version) {
        this.lastMesgDefinition = new Array(Fit_1.default.MAX_LOCAL_MESGS);
        this.version = version;
        this.validator = ProtocolValidatorFactory_1.default.getProtocolValidator(version);
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
        fs.writeFileSync(file, '');
        this.crc16 = new CRC16_1.default();
        this.file = file;
        this.writeFileHeader();
        try {
            this.out = fs.createWriteStream(this.file, { flags: 'a' });
            this.rawWrite = this.out.write.bind(this.out);
            this.crcOut = {
                write: (chunk) => {
                    const buf = typeof chunk === 'number'
                        ? Buffer.from([chunk])
                        : Buffer.isBuffer(chunk)
                            ? chunk
                            : Buffer.from(chunk);
                    this.crc16.update(buf, 0, buf.length);
                    this.rawWrite(buf);
                },
            };
            this.out.on('error', (err) => {
                throw new FitRuntimeException_1.default(err);
            });
            this.out.on('finish', () => {
                this.out.close();
            });
        }
        catch (e) {
            throw new FitRuntimeException_1.default(e);
        }
    }
    open(_file) { }
    writeFileHeader() {
        if (!this.file) {
            throw new FitRuntimeException_1.default('File not open.');
        }
        try {
            const crc = new CRC16_1.default();
            const raf = fs.openSync(this.file, 'r+');
            let dataSize = fs.statSync(this.file).size - Fit_1.default.FILE_HDR_SIZE;
            let crcValue = 0;
            if (dataSize < 0) {
                dataSize = 0;
            }
            const header = Buffer.from([
                Fit_1.default.FILE_HDR_SIZE,
                this.version.getVersion(),
                Fit_1.default.PROFILE_VERSION & 0xff,
                Fit_1.default.PROFILE_VERSION >> 8,
                dataSize & 0xff,
                (dataSize >> 8) & 0xff,
                (dataSize >> 16) & 0xff,
                (dataSize >> 24) & 0xff,
                '.'.charCodeAt(0),
                'F'.charCodeAt(0),
                'I'.charCodeAt(0),
                'T'.charCodeAt(0),
            ]);
            fs.writeSync(raf, header);
            crc.update(header, 0, header.length);
            crcValue = crc.getValue();
            const crcBuffer = Buffer.from([crcValue & 0xff, (crcValue >> 8) & 0xff]);
            fs.writeSync(raf, crcBuffer);
            fs.closeSync(raf);
        }
        catch (e) {
            throw new FitRuntimeException_1.default(e);
        }
    }
    onMesg(mesg) {
        this.writeMesg(mesg);
    }
    onMesgDefinition(mesgDefinition) {
        this.writeMesgDefinition(mesgDefinition);
    }
    writeMesgDefinition(mesgDefinition) {
        if (!this.file) {
            throw new FitRuntimeException_1.default('File not open.');
        }
        if (!this.validator.validateMesgDefn(mesgDefinition)) {
            throw new FitRuntimeException_1.default('Incompatible Protocol Features');
        }
        mesgDefinition.write(this.crcOut);
        this.lastMesgDefinition[mesgDefinition.localNum] = mesgDefinition;
    }
    writeMesg(mesg) {
        if (!this.file) {
            throw new FitRuntimeException_1.default('File not open.');
        }
        if (!this.validator.validateMesg(mesg)) {
            throw new FitRuntimeException_1.default('Incompatible Protocol Features');
        }
        const localNum = mesg.getLocalNum();
        if (!this.lastMesgDefinition[localNum] ||
            !this.lastMesgDefinition[localNum].supports(new MesgDefinition_1.default(mesg))) {
            this.writeMesgDefinition(new MesgDefinition_1.default(mesg));
        }
        mesg.write(this.crcOut, this.lastMesgDefinition[localNum]);
    }
    writeMesgArr(mesgs) {
        for (const mesg of mesgs) {
            this.writeMesg(mesg);
        }
    }
    close() {
        if (!this.file) {
            throw new FitRuntimeException_1.default('File not open.');
        }
        try {
            this.writeFileHeader();
            const crc = this.crc16.getValue();
            const crcBuffer = Buffer.from([crc & 0xff, (crc >> 8) & 0xff]);
            fs.appendFileSync(this.file, crcBuffer);
            this.out.close();
        }
        catch (e) {
            throw new FitRuntimeException_1.default(e);
        }
    }
}
exports.FileEncoder = FileEncoder;

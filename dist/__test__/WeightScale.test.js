"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileEncoder_1 = require("../FileEncoder");
const ProtocolVersion_1 = __importDefault(require("../ProtocolVersion"));
test('WeightScale', () => {
    const _encoder = new FileEncoder_1.FileEncoder('./test.fit', ProtocolVersion_1.default.V1_0);
    void _encoder;
});

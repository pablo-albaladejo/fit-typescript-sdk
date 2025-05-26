"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class BarometerDataMesg extends Mesg_1.default {
    constructor(mesg) {
        super(mesg || 'barometer_data', MesgNum_1.default.BAROMETER_DATA);
    }
}
exports.default = BarometerDataMesg;

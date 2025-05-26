"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class ThreeDSensorCalibrationMesg extends Mesg_1.default {
    constructor(mesg) {
        super(mesg || 'three_dsensor_calibration', MesgNum_1.default.THREE_D_SENSOR_CALIBRATION);
    }
}
exports.default = ThreeDSensorCalibrationMesg;

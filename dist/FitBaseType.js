"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fit_1 = __importDefault(require("./Fit"));
var FitBaseType;
(function (FitBaseType) {
    FitBaseType[FitBaseType["ENUM"] = Fit_1.default.BASE_TYPE_ENUM] = "ENUM";
    FitBaseType[FitBaseType["SINT8"] = Fit_1.default.BASE_TYPE_SINT8] = "SINT8";
    FitBaseType[FitBaseType["UINT8"] = Fit_1.default.BASE_TYPE_UINT8] = "UINT8";
    FitBaseType[FitBaseType["SINT16"] = Fit_1.default.BASE_TYPE_SINT16] = "SINT16";
    FitBaseType[FitBaseType["UINT16"] = Fit_1.default.BASE_TYPE_UINT16] = "UINT16";
    FitBaseType[FitBaseType["SINT32"] = Fit_1.default.BASE_TYPE_SINT32] = "SINT32";
    FitBaseType[FitBaseType["UINT32"] = Fit_1.default.BASE_TYPE_UINT32] = "UINT32";
    FitBaseType[FitBaseType["STRING"] = Fit_1.default.BASE_TYPE_STRING] = "STRING";
    FitBaseType[FitBaseType["FLOAT32"] = Fit_1.default.BASE_TYPE_FLOAT32] = "FLOAT32";
    FitBaseType[FitBaseType["FLOAT64"] = Fit_1.default.BASE_TYPE_FLOAT64] = "FLOAT64";
    FitBaseType[FitBaseType["UINT8Z"] = Fit_1.default.BASE_TYPE_UINT8Z] = "UINT8Z";
    FitBaseType[FitBaseType["UINT16Z"] = Fit_1.default.BASE_TYPE_UINT16Z] = "UINT16Z";
    FitBaseType[FitBaseType["UINT32Z"] = Fit_1.default.BASE_TYPE_UINT32Z] = "UINT32Z";
    FitBaseType[FitBaseType["BYTE"] = Fit_1.default.BASE_TYPE_BYTE] = "BYTE";
    FitBaseType[FitBaseType["SINT64"] = Fit_1.default.BASE_TYPE_SINT64] = "SINT64";
    FitBaseType[FitBaseType["UINT64"] = Fit_1.default.BASE_TYPE_UINT64] = "UINT64";
    FitBaseType[FitBaseType["UINT64Z"] = Fit_1.default.BASE_TYPE_UINT64Z] = "UINT64Z";
})(FitBaseType || (FitBaseType = {}));
exports.default = FitBaseType;

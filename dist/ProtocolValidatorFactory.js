"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fit_1 = __importDefault(require("./Fit"));
const MesgDefinition_1 = __importDefault(require("./MesgDefinition"));
const ProtocolVersion_1 = __importDefault(require("./ProtocolVersion"));
class ProtocolValidatorFactory {
    constructor() { }
    /**
     * Factory method to create a ProtocolValidator object
     *
     * @param protocolVersion the protocol version
     * @return a ProtocolValidator object
     */
    static getProtocolValidator(protocolVersion) {
        switch (protocolVersion) {
            case ProtocolVersion_1.default.V1_0:
                return new V1Validator();
            default:
                return new V2Validator();
        }
    }
}
// Definición de la clase V1Validator
class V1Validator {
    hasDeveloperData(defn) {
        return defn.developerFields.length > 0;
    }
    validateMesgDefn(mesgDefinition) {
        if (this.hasDeveloperData(mesgDefinition)) {
            return false;
        }
        for (const def of mesgDefinition.getFields()) {
            const typeNum = def.getType() & Fit_1.default.BASE_TYPE_NUM_MASK;
            if (typeNum > Fit_1.default.BASE_TYPE_BYTE) {
                // Byte was the last type added to 1.0
                return false;
            }
        }
        return true;
    }
    validateMesg(mesg) {
        if (this.hasDeveloperData(new MesgDefinition_1.default(mesg))) {
            return false;
        }
        for (const fld of mesg.getFields()) {
            const typeNum = fld.getType() & Fit_1.default.BASE_TYPE_NUM_MASK;
            if (typeNum > Fit_1.default.BASE_TYPE_BYTE) {
                // Byte was the last type added to 1.0
                return false;
            }
        }
        return true;
    }
}
// Definición de la clase V2Validator
class V2Validator {
    validateMesgDefn(_defn) {
        return true;
    }
    validateMesg(_mesg) {
        return true;
    }
}
exports.default = ProtocolValidatorFactory;

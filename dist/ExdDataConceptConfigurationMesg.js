"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("./Mesg"));
const MesgNum_1 = __importDefault(require("./MesgNum"));
class ExdDataConceptConfigurationMesg extends Mesg_1.default {
    constructor(mesg) {
        super(mesg || 'exd_data_concept_configuration', MesgNum_1.default.EXD_DATA_CONCEPT_CONFIGURATION);
    }
}
exports.default = ExdDataConceptConfigurationMesg;

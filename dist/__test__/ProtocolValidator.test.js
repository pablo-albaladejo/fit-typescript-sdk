"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mesg_1 = __importDefault(require("../Mesg"));
const MesgDefinition_1 = __importDefault(require("../MesgDefinition"));
const DeveloperField_1 = __importDefault(require("../DeveloperField"));
const ProtocolValidatorFactory_1 = __importDefault(require("../ProtocolValidatorFactory"));
const ProtocolVersion_1 = __importDefault(require("../ProtocolVersion"));
const Fit_1 = __importDefault(require("../Fit"));
function createDevMesg() {
    const m = new Mesg_1.default('test', 1000);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    m.developerFields.push(new DeveloperField_1.default());
    return m;
}
function createNewTypeMesg() {
    const m = new Mesg_1.default('test', 1001);
    const f = {
        getNum: () => 1,
        getSize: () => Fit_1.default.baseTypeSizes[Fit_1.default.BASE_TYPE_SINT64 & Fit_1.default.BASE_TYPE_NUM_MASK],
        getType: () => Fit_1.default.BASE_TYPE_SINT64,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    m.fields.push(f);
    return m;
}
test('validator rejects developer data on v1', () => {
    const mesg = createDevMesg();
    const def = new MesgDefinition_1.default(mesg);
    const v1 = ProtocolValidatorFactory_1.default.getProtocolValidator(ProtocolVersion_1.default.V1_0);
    const v2 = ProtocolValidatorFactory_1.default.getProtocolValidator(ProtocolVersion_1.default.V2_0);
    expect(v1.validateMesg(mesg)).toBe(false);
    expect(v1.validateMesgDefn(def)).toBe(false);
    expect(v2.validateMesg(mesg)).toBe(true);
    expect(v2.validateMesgDefn(def)).toBe(true);
});
test('validator rejects new base types on v1', () => {
    const mesg = createNewTypeMesg();
    const def = new MesgDefinition_1.default(mesg);
    const v1 = ProtocolValidatorFactory_1.default.getProtocolValidator(ProtocolVersion_1.default.V1_0);
    expect(v1.validateMesg(mesg)).toBe(false);
    expect(v1.validateMesgDefn(def)).toBe(false);
});

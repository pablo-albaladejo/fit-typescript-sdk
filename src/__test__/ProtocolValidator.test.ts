import Mesg from '../Mesg';
import MesgDefinition from '../MesgDefinition';
import DeveloperField from '../DeveloperField';
import Field from '../Field';
import ProtocolValidatorFactory from '../ProtocolValidatorFactory';
import ProtocolVersion from '../ProtocolVersion';
import Fit from '../Fit';

function createDevMesg(): Mesg {
  const m = new Mesg('test', 1000);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (m as any).developerFields.push(new DeveloperField());
  return m;
}

function createNewTypeMesg(): Mesg {
  const m = new Mesg('test', 1001);
  const f = {
    getNum: () => 1,
    getSize: () =>
      Fit.baseTypeSizes[Fit.BASE_TYPE_SINT64 & Fit.BASE_TYPE_NUM_MASK],
    getType: () => Fit.BASE_TYPE_SINT64,
  } as unknown as Field;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (m as any).fields.push(f);
  return m;
}

test('validator rejects developer data on v1', () => {
  const mesg = createDevMesg();
  const def = new MesgDefinition(mesg);
  const v1 = ProtocolValidatorFactory.getProtocolValidator(ProtocolVersion.V1_0);
  const v2 = ProtocolValidatorFactory.getProtocolValidator(ProtocolVersion.V2_0);
  expect(v1.validateMesg(mesg)).toBe(false);
  expect(v1.validateMesgDefn(def)).toBe(false);
  expect(v2.validateMesg(mesg)).toBe(true);
  expect(v2.validateMesgDefn(def)).toBe(true);
});

test('validator rejects new base types on v1', () => {
  const mesg = createNewTypeMesg();
  const def = new MesgDefinition(mesg);
  const v1 = ProtocolValidatorFactory.getProtocolValidator(ProtocolVersion.V1_0);
  expect(v1.validateMesg(mesg)).toBe(false);
  expect(v1.validateMesgDefn(def)).toBe(false);
});

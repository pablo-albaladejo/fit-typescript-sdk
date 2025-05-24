import Mesg from './Mesg';
import MesgNum from './MesgNum';

class FieldCapabilitiesMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'field_capabilities', MesgNum.FIELD_CAPABILITIES);
  }
}
export default FieldCapabilitiesMesg;

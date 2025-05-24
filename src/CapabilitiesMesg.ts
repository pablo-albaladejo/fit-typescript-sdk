import Mesg from './Mesg';
import MesgNum from './MesgNum';

class CapabilitiesMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'capabilities', MesgNum.CAPABILITIES);
  }
}
export default CapabilitiesMesg;

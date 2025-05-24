import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MesgCapabilitiesMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'mesg_capabilities', MesgNum.MESG_CAPABILITIES);
  }
}
export default MesgCapabilitiesMesg;

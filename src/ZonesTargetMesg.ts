import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ZonesTargetMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'zones_target', MesgNum.ZONES_TARGET);
  }
}
export default ZonesTargetMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class CadenceZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'cadence_zone', MesgNum.CADENCE_ZONE);
  }
}
export default CadenceZoneMesg;

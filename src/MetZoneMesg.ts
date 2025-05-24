import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MetZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'met_zone', MesgNum.MET_ZONE);
  }
}
export default MetZoneMesg;

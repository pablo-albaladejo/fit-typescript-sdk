import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrvMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hrv', MesgNum.HRV);
  }
}
export default HrvMesg;

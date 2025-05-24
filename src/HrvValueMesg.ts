import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrvValueMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hrv_value', MesgNum.HRV_VALUE);
  }
}
export default HrvValueMesg;

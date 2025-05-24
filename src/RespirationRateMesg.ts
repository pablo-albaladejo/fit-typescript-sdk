import Mesg from './Mesg';
import MesgNum from './MesgNum';

class RespirationRateMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'respiration_rate', MesgNum.RESPIRATION_RATE);
  }
}
export default RespirationRateMesg;

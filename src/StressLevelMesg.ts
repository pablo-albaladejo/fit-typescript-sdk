import Mesg from './Mesg';
import MesgNum from './MesgNum';

class StressLevelMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'stress_level', MesgNum.STRESS_LEVEL);
  }
}
export default StressLevelMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SleepLevelMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'sleep_level', MesgNum.SLEEP_LEVEL);
  }
}
export default SleepLevelMesg;

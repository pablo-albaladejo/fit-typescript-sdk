import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DiveAlarmMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'dive_alarm', MesgNum.DIVE_ALARM);
  }
}
export default DiveAlarmMesg;

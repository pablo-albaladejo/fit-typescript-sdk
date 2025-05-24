import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DiveApneaAlarmMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'dive_apnea_alarm', MesgNum.DIVE_APNEA_ALARM);
  }
}
export default DiveApneaAlarmMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SleepAssessmentMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'sleep_assessment', MesgNum.SLEEP_ASSESSMENT);
  }
}
export default SleepAssessmentMesg;

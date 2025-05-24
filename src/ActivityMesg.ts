import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ActivityMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'activity', MesgNum.ACTIVITY);
  }
}
export default ActivityMesg;

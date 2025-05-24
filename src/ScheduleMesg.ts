import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ScheduleMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'schedule', MesgNum.SCHEDULE);
  }
}
export default ScheduleMesg;

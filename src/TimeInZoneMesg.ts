import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TimeInZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'time_in_zone', MesgNum.TIME_IN_ZONE);
  }
}
export default TimeInZoneMesg;

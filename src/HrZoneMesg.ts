import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hr_zone', MesgNum.HR_ZONE);
  }
}
export default HrZoneMesg;

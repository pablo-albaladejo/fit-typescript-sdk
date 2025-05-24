import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hr', MesgNum.HR);
  }
}
export default HrMesg;

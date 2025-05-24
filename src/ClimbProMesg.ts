import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ClimbProMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'climb_pro', MesgNum.CLIMB_PRO);
  }
}
export default ClimbProMesg;

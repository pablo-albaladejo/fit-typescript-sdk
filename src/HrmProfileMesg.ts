import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrmProfileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hrm_profile', MesgNum.HRM_PROFILE);
  }
}
export default HrmProfileMesg;

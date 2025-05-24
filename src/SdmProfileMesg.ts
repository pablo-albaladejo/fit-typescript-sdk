import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SdmProfileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'sdm_profile', MesgNum.SDM_PROFILE);
  }
}
export default SdmProfileMesg;

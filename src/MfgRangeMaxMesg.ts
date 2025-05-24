import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MfgRangeMaxMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'mfg_range_max', MesgNum.MFG_RANGE_MAX);
  }
}
export default MfgRangeMaxMesg;

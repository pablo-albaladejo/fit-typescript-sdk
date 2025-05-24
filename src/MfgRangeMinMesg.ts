import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MfgRangeMinMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'mfg_range_min', MesgNum.MFG_RANGE_MIN);
  }
}
export default MfgRangeMinMesg;

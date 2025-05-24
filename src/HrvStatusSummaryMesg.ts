import Mesg from './Mesg';
import MesgNum from './MesgNum';

class HrvStatusSummaryMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'hrv_status_summary', MesgNum.HRV_STATUS_SUMMARY);
  }
}
export default HrvStatusSummaryMesg;

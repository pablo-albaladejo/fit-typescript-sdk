import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DiveSummaryMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'dive_summary', MesgNum.DIVE_SUMMARY);
  }
}
export default DiveSummaryMesg;

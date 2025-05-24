import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TankSummaryMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'tank_summary', MesgNum.TANK_SUMMARY);
  }
}
export default TankSummaryMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TotalsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'totals', MesgNum.TOTALS);
  }
}
export default TotalsMesg;

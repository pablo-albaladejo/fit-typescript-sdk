import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MaxMetDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'max_met_data', MesgNum.MAX_MET_DATA);
  }
}
export default MaxMetDataMesg;

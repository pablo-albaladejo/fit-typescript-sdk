import Mesg from './Mesg';
import MesgNum from './MesgNum';

class LapMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'lap', MesgNum.LAP);
  }
}
export default LapMesg;

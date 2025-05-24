import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SplitMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'split', MesgNum.SPLIT);
  }
}
export default SplitMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class PadMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'pad', MesgNum.PAD);
  }
}
export default PadMesg;

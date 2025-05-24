import Mesg from './Mesg';
import MesgNum from './MesgNum';

class LengthMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'length', MesgNum.LENGTH);
  }
}
export default LengthMesg;

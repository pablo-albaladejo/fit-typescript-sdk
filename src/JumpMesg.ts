import Mesg from './Mesg';
import MesgNum from './MesgNum';

class JumpMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'jump', MesgNum.JUMP);
  }
}
export default JumpMesg;

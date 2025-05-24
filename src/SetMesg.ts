import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SetMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'set', MesgNum.SET);
  }
}
export default SetMesg;

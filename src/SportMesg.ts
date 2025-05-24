import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SportMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'sport', MesgNum.SPORT);
  }
}
export default SportMesg;

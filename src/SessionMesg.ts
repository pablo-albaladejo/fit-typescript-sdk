import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SessionMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'session', MesgNum.SESSION);
  }
}
export default SessionMesg;

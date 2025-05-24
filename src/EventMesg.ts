import Mesg from './Mesg';
import MesgNum from './MesgNum';

class EventMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'event', MesgNum.EVENT);
  }
}
export default EventMesg;

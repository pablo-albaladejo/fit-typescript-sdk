import Mesg from './Mesg';
import MesgNum from './MesgNum';

class RecordMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'record', MesgNum.RECORD);
  }
}
export default RecordMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TimestampCorrelationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'timestamp_correlation', MesgNum.TIMESTAMP_CORRELATION);
  }
}
export default TimestampCorrelationMesg;

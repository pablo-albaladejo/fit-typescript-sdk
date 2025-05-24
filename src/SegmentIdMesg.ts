import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SegmentIdMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'segment_id', MesgNum.SEGMENT_ID);
  }
}
export default SegmentIdMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SegmentPointMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'segment_point', MesgNum.SEGMENT_POINT);
  }
}
export default SegmentPointMesg;

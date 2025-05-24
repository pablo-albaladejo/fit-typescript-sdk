import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SegmentLapMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'segment_lap', MesgNum.SEGMENT_LAP);
  }
}
export default SegmentLapMesg;

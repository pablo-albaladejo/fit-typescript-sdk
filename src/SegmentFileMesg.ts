import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SegmentFileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'segment_file', MesgNum.SEGMENT_FILE);
  }
}
export default SegmentFileMesg;

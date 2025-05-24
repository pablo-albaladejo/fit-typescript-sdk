import Mesg from './Mesg';
import MesgNum from './MesgNum';

class VideoFrameMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'video_frame', MesgNum.VIDEO_FRAME);
  }
}
export default VideoFrameMesg;

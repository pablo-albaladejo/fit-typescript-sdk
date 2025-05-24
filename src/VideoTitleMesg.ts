import Mesg from './Mesg';
import MesgNum from './MesgNum';

class VideoTitleMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'video_title', MesgNum.VIDEO_TITLE);
  }
}
export default VideoTitleMesg;

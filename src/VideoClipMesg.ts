import Mesg from './Mesg';
import MesgNum from './MesgNum';

class VideoClipMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'video_clip', MesgNum.VIDEO_CLIP);
  }
}
export default VideoClipMesg;

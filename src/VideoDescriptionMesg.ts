import Mesg from './Mesg';
import MesgNum from './MesgNum';

class VideoDescriptionMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'video_description', MesgNum.VIDEO_DESCRIPTION);
  }
}
export default VideoDescriptionMesg;

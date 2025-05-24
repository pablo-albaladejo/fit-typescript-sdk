import Mesg from './Mesg';
import MesgNum from './MesgNum';

class VideoMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'video', MesgNum.VIDEO);
  }
}
export default VideoMesg;

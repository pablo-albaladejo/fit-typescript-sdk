import Mesg from './Mesg';
import MesgNum from './MesgNum';

class CameraEventMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'camera_event', MesgNum.CAMERA_EVENT);
  }
}
export default CameraEventMesg;

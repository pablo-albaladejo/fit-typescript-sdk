import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DeviceInfoMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'device_info', MesgNum.DEVICE_INFO);
  }
}
export default DeviceInfoMesg;

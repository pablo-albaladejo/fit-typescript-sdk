import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SlaveDeviceMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'slave_device', MesgNum.SLAVE_DEVICE);
  }
}
export default SlaveDeviceMesg;

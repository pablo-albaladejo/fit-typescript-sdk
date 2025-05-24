import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DeviceAuxBatteryInfoMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'device_aux_battery_info', MesgNum.DEVICE_AUX_BATTERY_INFO);
  }
}
export default DeviceAuxBatteryInfoMesg;

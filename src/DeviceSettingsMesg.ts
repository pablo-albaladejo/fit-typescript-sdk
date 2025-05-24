import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DeviceSettingsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'device_settings', MesgNum.DEVICE_SETTINGS);
  }
}
export default DeviceSettingsMesg;

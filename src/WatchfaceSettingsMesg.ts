import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WatchfaceSettingsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'watchface_settings', MesgNum.WATCHFACE_SETTINGS);
  }
}
export default WatchfaceSettingsMesg;

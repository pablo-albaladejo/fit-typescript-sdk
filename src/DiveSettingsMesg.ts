import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DiveSettingsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'dive_settings', MesgNum.DIVE_SETTINGS);
  }
}
export default DiveSettingsMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class OhrSettingsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'ohr_settings', MesgNum.OHR_SETTINGS);
  }
}
export default OhrSettingsMesg;

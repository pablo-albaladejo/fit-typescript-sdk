import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ExdScreenConfigurationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'exd_screen_configuration', MesgNum.EXD_SCREEN_CONFIGURATION);
  }
}
export default ExdScreenConfigurationMesg;

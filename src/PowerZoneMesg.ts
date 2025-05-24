import Mesg from './Mesg';
import MesgNum from './MesgNum';

class PowerZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'power_zone', MesgNum.POWER_ZONE);
  }
}
export default PowerZoneMesg;

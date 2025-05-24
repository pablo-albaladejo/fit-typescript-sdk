import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SpeedZoneMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'speed_zone', MesgNum.SPEED_ZONE);
  }
}
export default SpeedZoneMesg;

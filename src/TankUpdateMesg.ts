import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TankUpdateMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'tank_update', MesgNum.TANK_UPDATE);
  }
}
export default TankUpdateMesg;

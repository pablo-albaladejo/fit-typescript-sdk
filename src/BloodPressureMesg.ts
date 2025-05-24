import Mesg from './Mesg';
import MesgNum from './MesgNum';

class BloodPressureMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'blood_pressure', MesgNum.BLOOD_PRESSURE);
  }
}
export default BloodPressureMesg;

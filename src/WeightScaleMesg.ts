import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WeightScaleMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'weight_scale', MesgNum.WEIGHT_SCALE);
  }
}
export default WeightScaleMesg;

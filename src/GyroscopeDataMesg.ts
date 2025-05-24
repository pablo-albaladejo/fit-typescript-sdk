import Mesg from './Mesg';
import MesgNum from './MesgNum';

class GyroscopeDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'gyroscope_data', MesgNum.GYROSCOPE_DATA);
  }
}
export default GyroscopeDataMesg;

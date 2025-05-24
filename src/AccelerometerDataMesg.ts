import Mesg from './Mesg';
import MesgNum from './MesgNum';

class AccelerometerDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'accelerometer_data', MesgNum.ACCELEROMETER_DATA);
  }
}
export default AccelerometerDataMesg;

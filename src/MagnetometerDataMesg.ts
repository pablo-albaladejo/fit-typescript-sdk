import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MagnetometerDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'magnetometer_data', MesgNum.MAGNETOMETER_DATA);
  }
}
export default MagnetometerDataMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class BarometerDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'barometer_data', MesgNum.BAROMETER_DATA);
  }
}
export default BarometerDataMesg;

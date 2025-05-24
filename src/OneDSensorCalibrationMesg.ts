import Mesg from './Mesg';
import MesgNum from './MesgNum';

class OneDSensorCalibrationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'one_dsensor_calibration', MesgNum.ONE_D_SENSOR_CALIBRATION);
  }
}
export default OneDSensorCalibrationMesg;

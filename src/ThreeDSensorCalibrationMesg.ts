import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ThreeDSensorCalibrationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'three_dsensor_calibration', MesgNum.THREE_D_SENSOR_CALIBRATION);
  }
}
export default ThreeDSensorCalibrationMesg;

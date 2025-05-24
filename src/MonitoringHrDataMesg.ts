import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MonitoringHrDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'monitoring_hr_data', MesgNum.MONITORING_HR_DATA);
  }
}
export default MonitoringHrDataMesg;

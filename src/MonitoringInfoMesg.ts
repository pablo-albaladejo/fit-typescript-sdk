import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MonitoringInfoMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'monitoring_info', MesgNum.MONITORING_INFO);
  }
}
export default MonitoringInfoMesg;

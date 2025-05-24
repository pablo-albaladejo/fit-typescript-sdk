import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MonitoringMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'monitoring', MesgNum.MONITORING);
  }
}
export default MonitoringMesg;

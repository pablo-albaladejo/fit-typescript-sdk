import Mesg from './Mesg';
import MesgNum from './MesgNum';

class AntRxMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'ant_rx', MesgNum.ANT_RX);
  }
}
export default AntRxMesg;

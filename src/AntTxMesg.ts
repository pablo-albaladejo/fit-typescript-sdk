import Mesg from './Mesg';
import MesgNum from './MesgNum';

class AntTxMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'ant_tx', MesgNum.ANT_TX);
  }
}
export default AntTxMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ConnectivityMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'connectivity', MesgNum.CONNECTIVITY);
  }
}
export default ConnectivityMesg;

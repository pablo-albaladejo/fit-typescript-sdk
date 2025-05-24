import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ObdiiDataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'obdii_data', MesgNum.OBDII_DATA);
  }
}
export default ObdiiDataMesg;

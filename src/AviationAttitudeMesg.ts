import Mesg from './Mesg';
import MesgNum from './MesgNum';

class AviationAttitudeMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'aviation_attitude', MesgNum.AVIATION_ATTITUDE);
  }
}
export default AviationAttitudeMesg;

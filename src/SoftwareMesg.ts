import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SoftwareMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'software', MesgNum.SOFTWARE);
  }
}
export default SoftwareMesg;

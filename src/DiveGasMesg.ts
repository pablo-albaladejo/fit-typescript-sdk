import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DiveGasMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'dive_gas', MesgNum.DIVE_GAS);
  }
}
export default DiveGasMesg;

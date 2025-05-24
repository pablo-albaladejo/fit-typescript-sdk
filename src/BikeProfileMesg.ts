import Mesg from './Mesg';
import MesgNum from './MesgNum';

class BikeProfileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'bike_profile', MesgNum.BIKE_PROFILE);
  }
}
export default BikeProfileMesg;

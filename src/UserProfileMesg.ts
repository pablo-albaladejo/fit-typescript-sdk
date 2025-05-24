import Mesg from './Mesg';
import MesgNum from './MesgNum';

class UserProfileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'user_profile', MesgNum.USER_PROFILE);
  }
}
export default UserProfileMesg;

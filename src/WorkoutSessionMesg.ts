import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WorkoutSessionMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'workout_session', MesgNum.WORKOUT_SESSION);
  }
}
export default WorkoutSessionMesg;

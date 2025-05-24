import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WorkoutStepMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'workout_step', MesgNum.WORKOUT_STEP);
  }
}
export default WorkoutStepMesg;

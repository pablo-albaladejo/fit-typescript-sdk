import Mesg from './Mesg';
import MesgNum from './MesgNum';

class WorkoutMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'workout', MesgNum.WORKOUT);
  }
}
export default WorkoutMesg;

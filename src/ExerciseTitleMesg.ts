import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ExerciseTitleMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'exercise_title', MesgNum.EXERCISE_TITLE);
  }
}
export default ExerciseTitleMesg;

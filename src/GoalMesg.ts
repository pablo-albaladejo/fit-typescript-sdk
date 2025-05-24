import Mesg from './Mesg';
import MesgNum from './MesgNum';

class GoalMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'goal', MesgNum.GOAL);
  }
}
export default GoalMesg;

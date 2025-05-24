import Mesg from './Mesg';
import MesgNum from './MesgNum';

class TrainingFileMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'training_file', MesgNum.TRAINING_FILE);
  }
}
export default TrainingFileMesg;

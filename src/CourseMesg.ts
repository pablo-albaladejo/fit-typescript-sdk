import Mesg from './Mesg';
import MesgNum from './MesgNum';

class CourseMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'course', MesgNum.COURSE);
  }
}
export default CourseMesg;

import Mesg from './Mesg';
import MesgNum from './MesgNum';

class CoursePointMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'course_point', MesgNum.COURSE_POINT);
  }
}
export default CoursePointMesg;

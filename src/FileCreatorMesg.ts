import Mesg from './Mesg';
import MesgNum from './MesgNum';

class FileCreatorMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'file_creator', MesgNum.FILE_CREATOR);
  }
}
export default FileCreatorMesg;

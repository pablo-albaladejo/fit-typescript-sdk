import Mesg from './Mesg';
import MesgNum from './MesgNum';

class FileIdMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'file_id', MesgNum.FILE_ID);
  }
}
export default FileIdMesg;

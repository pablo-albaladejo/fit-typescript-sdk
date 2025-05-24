import Mesg from './Mesg';
import MesgNum from './MesgNum';

class FileCapabilitiesMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'file_capabilities', MesgNum.FILE_CAPABILITIES);
  }
}
export default FileCapabilitiesMesg;

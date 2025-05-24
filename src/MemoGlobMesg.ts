import Mesg from './Mesg';
import MesgNum from './MesgNum';

class MemoGlobMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'memo_glob', MesgNum.MEMO_GLOB);
  }
}
export default MemoGlobMesg;

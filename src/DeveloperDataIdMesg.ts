import Mesg from './Mesg';
import MesgNum from './MesgNum';

class DeveloperDataIdMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'developer_data_id', MesgNum.DEVELOPER_DATA_ID);
  }
}
export default DeveloperDataIdMesg;

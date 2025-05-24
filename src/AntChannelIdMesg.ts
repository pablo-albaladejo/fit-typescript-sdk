import Mesg from './Mesg';
import MesgNum from './MesgNum';

class AntChannelIdMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'ant_channel_id', MesgNum.ANT_CHANNEL_ID);
  }
}
export default AntChannelIdMesg;

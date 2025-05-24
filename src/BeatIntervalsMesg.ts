import Mesg from './Mesg';
import MesgNum from './MesgNum';

class BeatIntervalsMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'beat_intervals', MesgNum.BEAT_INTERVALS);
  }
}
export default BeatIntervalsMesg;

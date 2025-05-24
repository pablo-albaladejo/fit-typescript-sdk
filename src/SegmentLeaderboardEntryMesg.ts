import Mesg from './Mesg';
import MesgNum from './MesgNum';

class SegmentLeaderboardEntryMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'segment_leaderboard_entry', MesgNum.SEGMENT_LEADERBOARD_ENTRY);
  }
}
export default SegmentLeaderboardEntryMesg;

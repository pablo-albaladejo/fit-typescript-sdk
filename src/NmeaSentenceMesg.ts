import Mesg from './Mesg';
import MesgNum from './MesgNum';

class NmeaSentenceMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'nmea_sentence', MesgNum.NMEA_SENTENCE);
  }
}
export default NmeaSentenceMesg;

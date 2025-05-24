import Mesg from './Mesg';
import MesgNum from './MesgNum';

class GpsMetadataMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'gps_metadata', MesgNum.GPS_METADATA);
  }
}
export default GpsMetadataMesg;

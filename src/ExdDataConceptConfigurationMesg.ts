import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ExdDataConceptConfigurationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'exd_data_concept_configuration', MesgNum.EXD_DATA_CONCEPT_CONFIGURATION);
  }
}
export default ExdDataConceptConfigurationMesg;

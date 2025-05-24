import Mesg from './Mesg';
import MesgNum from './MesgNum';

class ExdDataFieldConfigurationMesg extends Mesg {
  constructor(mesg?: Mesg) {
    super(mesg || 'exd_data_field_configuration', MesgNum.EXD_DATA_FIELD_CONFIGURATION);
  }
}
export default ExdDataFieldConfigurationMesg;

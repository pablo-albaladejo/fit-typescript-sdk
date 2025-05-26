import Fit from './Fit';
import Mesg from './Mesg';
import MesgDefinition from './MesgDefinition';
import ProtocolValidator from './ProtocolValidator';
import ProtocolVersion from './ProtocolVersion';

class ProtocolValidatorFactory {
  private constructor() {}

  /**
   * Factory method to create a ProtocolValidator object
   *
   * @param protocolVersion the protocol version
   * @return a ProtocolValidator object
   */
  public static getProtocolValidator(
    protocolVersion: ProtocolVersion
  ): ProtocolValidator {
    switch (protocolVersion) {
      case ProtocolVersion.V1_0:
        return new V1Validator();

      default:
        return new V2Validator();
    }
  }
}

// Definición de la clase V1Validator
class V1Validator implements ProtocolValidator {
  private hasDeveloperData(defn: MesgDefinition): boolean {
    return defn.developerFields.length > 0;
  }

  validateMesgDefn(mesgDefinition: MesgDefinition): boolean {
    if (this.hasDeveloperData(mesgDefinition)) {
      return false;
    }

    for (const def of mesgDefinition.getFields()) {
      const typeNum = def.getType() & Fit.BASE_TYPE_NUM_MASK;
      if (typeNum > Fit.BASE_TYPE_BYTE) {
        // Byte was the last type added to 1.0
        return false;
      }
    }

    return true;
  }

  validateMesg(mesg: Mesg): boolean {
    if (this.hasDeveloperData(new MesgDefinition(mesg))) {
      return false;
    }

    for (const fld of mesg.getFields()) {
      const typeNum = fld.getType() & Fit.BASE_TYPE_NUM_MASK;
      if (typeNum > Fit.BASE_TYPE_BYTE) {
        // Byte was the last type added to 1.0
        return false;
      }
    }

    return true;
  }
}

// Definición de la clase V2Validator
class V2Validator implements ProtocolValidator {
  validateMesgDefn(_defn: MesgDefinition): boolean {
    return true;
  }

  validateMesg(_mesg: Mesg): boolean {
    return true;
  }
}
export default ProtocolValidatorFactory;
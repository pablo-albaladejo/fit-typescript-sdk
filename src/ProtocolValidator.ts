import Mesg from './Mesg';
import MesgDefinition from './MesgDefinition';

interface ProtocolValidator {
  /**
   * Validate if a Message is compatible with the version
   * @param mesg Message to validate
   * @return true if message is compatible false otherwise
   */
  validateMesg(mesg: Mesg): boolean;

  /**
   * Validate if a Message Definition is compatible with the version
   * @param defn Definition
   * @return true if Definition is compatible false otherwise
   */
  validateMesgDefn(defn: MesgDefinition): boolean;
}
export default ProtocolValidator;
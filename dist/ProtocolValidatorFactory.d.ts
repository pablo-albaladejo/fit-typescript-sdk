import ProtocolValidator from './ProtocolValidator';
import ProtocolVersion from './ProtocolVersion';
declare class ProtocolValidatorFactory {
    private constructor();
    /**
     * Factory method to create a ProtocolValidator object
     *
     * @param protocolVersion the protocol version
     * @return a ProtocolValidator object
     */
    static getProtocolValidator(protocolVersion: ProtocolVersion): ProtocolValidator;
}
export default ProtocolValidatorFactory;

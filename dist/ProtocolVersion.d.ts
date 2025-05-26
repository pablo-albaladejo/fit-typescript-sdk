declare class ProtocolVersion {
    private major;
    private minor;
    constructor(major: number, minor: number);
    getVersion(): number;
    getMajor(): number;
    getMinor(): number;
    static readonly V1_0: ProtocolVersion;
    static readonly V2_0: ProtocolVersion;
    static readonly PROTOCOL_VERSION_MAJOR_SHIFT = 4;
    static getHighestVersion(): ProtocolVersion;
}
export default ProtocolVersion;

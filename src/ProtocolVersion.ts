class ProtocolVersion {
  private major: number;
  private minor: number;

  constructor(major: number, minor: number) {
    this.major = major;
    this.minor = minor;
  }

  public getVersion(): number {
    return (
      (this.major << ProtocolVersion.PROTOCOL_VERSION_MAJOR_SHIFT) | this.minor
    );
  }

  public getMajor(): number {
    return this.major;
  }

  public getMinor(): number {
    return this.minor;
  }

  // Static property to mimic the static method in Java
  public static readonly V1_0 = new ProtocolVersion(1, 0);
  public static readonly V2_0 = new ProtocolVersion(2, 0);

  // Define the constant value similar to Java's enum constant
  public static readonly PROTOCOL_VERSION_MAJOR_SHIFT = 4;

  public static getHighestVersion(): ProtocolVersion {
    return ProtocolVersion.V2_0;
  }
}
export default ProtocolVersion;

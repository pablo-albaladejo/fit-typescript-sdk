class LanguageBits3 {
  public static BULGARIAN: number = 0x01;
  public static ROMANIAN: number = 0x02;
  public static CHINESE: number = 0x04;
  public static JAPANESE: number = 0x08;
  public static KOREAN: number = 0x10;
  public static TAIWANESE: number = 0x20;
  public static THAI: number = 0x40;
  public static HEBREW: number = 0x80;
  public static INVALID: number = 0xFF; // Assumed value for Fit.UINT8Z_INVALID

  private static stringMap: Map<number, string>;

  static {
    LanguageBits3.stringMap = new Map<number, string>();
    LanguageBits3.stringMap.set(LanguageBits3.BULGARIAN, "BULGARIAN");
    LanguageBits3.stringMap.set(LanguageBits3.ROMANIAN, "ROMANIAN");
    LanguageBits3.stringMap.set(LanguageBits3.CHINESE, "CHINESE");
    LanguageBits3.stringMap.set(LanguageBits3.JAPANESE, "JAPANESE");
    LanguageBits3.stringMap.set(LanguageBits3.KOREAN, "KOREAN");
    LanguageBits3.stringMap.set(LanguageBits3.TAIWANESE, "TAIWANESE");
    LanguageBits3.stringMap.set(LanguageBits3.THAI, "THAI");
    LanguageBits3.stringMap.set(LanguageBits3.HEBREW, "HEBREW");
  }

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    const result = LanguageBits3.stringMap.get(value);
    return result ?? "";
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of LanguageBits3.stringMap) {
      if (val === value) {
        return key;
      }
    }

    return LanguageBits3.INVALID;
  }
}
export default LanguageBits3;
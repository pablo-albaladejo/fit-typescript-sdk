class LanguageBits4 {
  public static BRAZILIAN_PORTUGUESE: number = 0x01;
  public static INDONESIAN: number = 0x02;
  public static MALAYSIAN: number = 0x04;
  public static VIETNAMESE: number = 0x08;
  public static BURMESE: number = 0x10;
  public static MONGOLIAN: number = 0x20;
  public static INVALID: number = 0xFF; // Assumed value for Fit.UINT8Z_INVALID

  private static stringMap: Map<number, string>;

  static {
    LanguageBits4.stringMap = new Map<number, string>();
    LanguageBits4.stringMap.set(LanguageBits4.BRAZILIAN_PORTUGUESE, "BRAZILIAN_PORTUGUESE");
    LanguageBits4.stringMap.set(LanguageBits4.INDONESIAN, "INDONESIAN");
    LanguageBits4.stringMap.set(LanguageBits4.MALAYSIAN, "MALAYSIAN");
    LanguageBits4.stringMap.set(LanguageBits4.VIETNAMESE, "VIETNAMESE");
    LanguageBits4.stringMap.set(LanguageBits4.BURMESE, "BURMESE");
    LanguageBits4.stringMap.set(LanguageBits4.MONGOLIAN, "MONGOLIAN");
  }

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    const result = LanguageBits4.stringMap.get(value);
    return result ?? "";
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of LanguageBits4.stringMap) {
      if (val === value) {
        return key;
      }
    }

    return LanguageBits4.INVALID;
  }
}
export default LanguageBits4;
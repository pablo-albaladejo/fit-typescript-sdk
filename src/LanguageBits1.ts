class LanguageBits1 {
  public static DUTCH: number = 0x01;
  public static FINNISH: number = 0x02;
  public static GREEK: number = 0x04;
  public static HUNGARIAN: number = 0x08;
  public static NORWEGIAN: number = 0x10;
  public static POLISH: number = 0x20;
  public static PORTUGUESE: number = 0x40;
  public static SLOVAKIAN: number = 0x80;
  public static INVALID: number = 0xff; // Assumed value for Fit.UINT8Z_INVALID

  private static stringMap: Map<number, string>;

  static {
    LanguageBits1.stringMap = new Map<number, string>();
    LanguageBits1.stringMap.set(LanguageBits1.DUTCH, 'DUTCH');
    LanguageBits1.stringMap.set(LanguageBits1.FINNISH, 'FINNISH');
    LanguageBits1.stringMap.set(LanguageBits1.GREEK, 'GREEK');
    LanguageBits1.stringMap.set(LanguageBits1.HUNGARIAN, 'HUNGARIAN');
    LanguageBits1.stringMap.set(LanguageBits1.NORWEGIAN, 'NORWEGIAN');
    LanguageBits1.stringMap.set(LanguageBits1.POLISH, 'POLISH');
    LanguageBits1.stringMap.set(LanguageBits1.PORTUGUESE, 'PORTUGUESE');
    LanguageBits1.stringMap.set(LanguageBits1.SLOVAKIAN, 'SLOVAKIAN');
  }

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    if (LanguageBits1.stringMap.has(value)) {
      return LanguageBits1.stringMap.get(value)!;
    }

    return '';
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of LanguageBits1.stringMap) {
      if (val === value) {
        return key;
      }
    }

    return LanguageBits1.INVALID;
  }
}
export default LanguageBits1;

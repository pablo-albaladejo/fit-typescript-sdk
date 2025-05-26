class LanguageBits0 {
  public static ENGLISH: number = 0x01;
  public static FRENCH: number = 0x02;
  public static ITALIAN: number = 0x04;
  public static GERMAN: number = 0x08;
  public static SPANISH: number = 0x10;
  public static CROATIAN: number = 0x20;
  public static CZECH: number = 0x40;
  public static DANISH: number = 0x80;
  public static INVALID: number = 0xff; // Assumed value for Fit.UINT8Z_INVALID

  private static stringMap: Map<number, string>;

  static {
    LanguageBits0.stringMap = new Map<number, string>();
    LanguageBits0.stringMap.set(LanguageBits0.ENGLISH, 'ENGLISH');
    LanguageBits0.stringMap.set(LanguageBits0.FRENCH, 'FRENCH');
    LanguageBits0.stringMap.set(LanguageBits0.ITALIAN, 'ITALIAN');
    LanguageBits0.stringMap.set(LanguageBits0.GERMAN, 'GERMAN');
    LanguageBits0.stringMap.set(LanguageBits0.SPANISH, 'SPANISH');
    LanguageBits0.stringMap.set(LanguageBits0.CROATIAN, 'CROATIAN');
    LanguageBits0.stringMap.set(LanguageBits0.CZECH, 'CZECH');
    LanguageBits0.stringMap.set(LanguageBits0.DANISH, 'DANISH');
  }

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    const result = LanguageBits0.stringMap.get(value);
    return result ?? '';
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of LanguageBits0.stringMap) {
      if (val === value) {
        return key;
      }
    }

    return LanguageBits0.INVALID;
  }
}

export default LanguageBits0;

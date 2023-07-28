class LanguageBits2 {
  public static SLOVENIAN: number = 0x01;
  public static SWEDISH: number = 0x02;
  public static RUSSIAN: number = 0x04;
  public static TURKISH: number = 0x08;
  public static LATVIAN: number = 0x10;
  public static UKRAINIAN: number = 0x20;
  public static ARABIC: number = 0x40;
  public static FARSI: number = 0x80;
  public static INVALID: number = 0xff; // Assumed value for Fit.UINT8Z_INVALID

  private static stringMap: Map<number, string>;

  static {
    LanguageBits2.stringMap = new Map<number, string>();
    LanguageBits2.stringMap.set(LanguageBits2.SLOVENIAN, 'SLOVENIAN');
    LanguageBits2.stringMap.set(LanguageBits2.SWEDISH, 'SWEDISH');
    LanguageBits2.stringMap.set(LanguageBits2.RUSSIAN, 'RUSSIAN');
    LanguageBits2.stringMap.set(LanguageBits2.TURKISH, 'TURKISH');
    LanguageBits2.stringMap.set(LanguageBits2.LATVIAN, 'LATVIAN');
    LanguageBits2.stringMap.set(LanguageBits2.UKRAINIAN, 'UKRAINIAN');
    LanguageBits2.stringMap.set(LanguageBits2.ARABIC, 'ARABIC');
    LanguageBits2.stringMap.set(LanguageBits2.FARSI, 'FARSI');
  }

  /**
   * Retrieves the String Representation of the Value
   * @param value The enum constant
   * @return The name of this enum constant
   */
  public static getStringFromValue(value: number): string {
    if (LanguageBits2.stringMap.has(value)) {
      return LanguageBits2.stringMap.get(value)!;
    }

    return '';
  }

  /**
   * Returns the enum constant with the specified name.
   * @param value The enum string value
   * @return The enum constant or INVALID if unknown
   */
  public static getValueFromString(value: string): number {
    for (const [key, val] of LanguageBits2.stringMap) {
      if (val === value) {
        return key;
      }
    }

    return LanguageBits2.INVALID;
  }
}
export default LanguageBits2;

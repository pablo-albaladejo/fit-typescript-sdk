declare class LanguageBits2 {
    static SLOVENIAN: number;
    static SWEDISH: number;
    static RUSSIAN: number;
    static TURKISH: number;
    static LATVIAN: number;
    static UKRAINIAN: number;
    static ARABIC: number;
    static FARSI: number;
    static INVALID: number;
    private static stringMap;
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value: number): string;
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value: string): number;
}
export default LanguageBits2;

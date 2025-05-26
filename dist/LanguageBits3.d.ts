declare class LanguageBits3 {
    static BULGARIAN: number;
    static ROMANIAN: number;
    static CHINESE: number;
    static JAPANESE: number;
    static KOREAN: number;
    static TAIWANESE: number;
    static THAI: number;
    static HEBREW: number;
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
export default LanguageBits3;

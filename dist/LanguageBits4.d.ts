declare class LanguageBits4 {
    static BRAZILIAN_PORTUGUESE: number;
    static INDONESIAN: number;
    static MALAYSIAN: number;
    static VIETNAMESE: number;
    static BURMESE: number;
    static MONGOLIAN: number;
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
export default LanguageBits4;

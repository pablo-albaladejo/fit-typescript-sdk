declare class LanguageBits1 {
    static DUTCH: number;
    static FINNISH: number;
    static GREEK: number;
    static HUNGARIAN: number;
    static NORWEGIAN: number;
    static POLISH: number;
    static PORTUGUESE: number;
    static SLOVAKIAN: number;
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
export default LanguageBits1;

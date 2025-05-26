declare class LanguageBits0 {
    static ENGLISH: number;
    static FRENCH: number;
    static ITALIAN: number;
    static GERMAN: number;
    static SPANISH: number;
    static CROATIAN: number;
    static CZECH: number;
    static DANISH: number;
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
export default LanguageBits0;

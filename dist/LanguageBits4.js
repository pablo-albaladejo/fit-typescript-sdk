"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageBits4 {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        const result = LanguageBits4.stringMap.get(value);
        return result !== null && result !== void 0 ? result : "";
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of LanguageBits4.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return LanguageBits4.INVALID;
    }
}
LanguageBits4.BRAZILIAN_PORTUGUESE = 0x01;
LanguageBits4.INDONESIAN = 0x02;
LanguageBits4.MALAYSIAN = 0x04;
LanguageBits4.VIETNAMESE = 0x08;
LanguageBits4.BURMESE = 0x10;
LanguageBits4.MONGOLIAN = 0x20;
LanguageBits4.INVALID = 0xFF; // Assumed value for Fit.UINT8Z_INVALID
(() => {
    LanguageBits4.stringMap = new Map();
    LanguageBits4.stringMap.set(LanguageBits4.BRAZILIAN_PORTUGUESE, "BRAZILIAN_PORTUGUESE");
    LanguageBits4.stringMap.set(LanguageBits4.INDONESIAN, "INDONESIAN");
    LanguageBits4.stringMap.set(LanguageBits4.MALAYSIAN, "MALAYSIAN");
    LanguageBits4.stringMap.set(LanguageBits4.VIETNAMESE, "VIETNAMESE");
    LanguageBits4.stringMap.set(LanguageBits4.BURMESE, "BURMESE");
    LanguageBits4.stringMap.set(LanguageBits4.MONGOLIAN, "MONGOLIAN");
})();
exports.default = LanguageBits4;

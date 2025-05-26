"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageBits3 {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        const result = LanguageBits3.stringMap.get(value);
        return result !== null && result !== void 0 ? result : "";
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of LanguageBits3.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return LanguageBits3.INVALID;
    }
}
LanguageBits3.BULGARIAN = 0x01;
LanguageBits3.ROMANIAN = 0x02;
LanguageBits3.CHINESE = 0x04;
LanguageBits3.JAPANESE = 0x08;
LanguageBits3.KOREAN = 0x10;
LanguageBits3.TAIWANESE = 0x20;
LanguageBits3.THAI = 0x40;
LanguageBits3.HEBREW = 0x80;
LanguageBits3.INVALID = 0xFF; // Assumed value for Fit.UINT8Z_INVALID
(() => {
    LanguageBits3.stringMap = new Map();
    LanguageBits3.stringMap.set(LanguageBits3.BULGARIAN, "BULGARIAN");
    LanguageBits3.stringMap.set(LanguageBits3.ROMANIAN, "ROMANIAN");
    LanguageBits3.stringMap.set(LanguageBits3.CHINESE, "CHINESE");
    LanguageBits3.stringMap.set(LanguageBits3.JAPANESE, "JAPANESE");
    LanguageBits3.stringMap.set(LanguageBits3.KOREAN, "KOREAN");
    LanguageBits3.stringMap.set(LanguageBits3.TAIWANESE, "TAIWANESE");
    LanguageBits3.stringMap.set(LanguageBits3.THAI, "THAI");
    LanguageBits3.stringMap.set(LanguageBits3.HEBREW, "HEBREW");
})();
exports.default = LanguageBits3;

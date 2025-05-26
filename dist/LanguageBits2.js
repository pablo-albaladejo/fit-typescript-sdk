"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageBits2 {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        const result = LanguageBits2.stringMap.get(value);
        return result !== null && result !== void 0 ? result : '';
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of LanguageBits2.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return LanguageBits2.INVALID;
    }
}
LanguageBits2.SLOVENIAN = 0x01;
LanguageBits2.SWEDISH = 0x02;
LanguageBits2.RUSSIAN = 0x04;
LanguageBits2.TURKISH = 0x08;
LanguageBits2.LATVIAN = 0x10;
LanguageBits2.UKRAINIAN = 0x20;
LanguageBits2.ARABIC = 0x40;
LanguageBits2.FARSI = 0x80;
LanguageBits2.INVALID = 0xff; // Assumed value for Fit.UINT8Z_INVALID
(() => {
    LanguageBits2.stringMap = new Map();
    LanguageBits2.stringMap.set(LanguageBits2.SLOVENIAN, 'SLOVENIAN');
    LanguageBits2.stringMap.set(LanguageBits2.SWEDISH, 'SWEDISH');
    LanguageBits2.stringMap.set(LanguageBits2.RUSSIAN, 'RUSSIAN');
    LanguageBits2.stringMap.set(LanguageBits2.TURKISH, 'TURKISH');
    LanguageBits2.stringMap.set(LanguageBits2.LATVIAN, 'LATVIAN');
    LanguageBits2.stringMap.set(LanguageBits2.UKRAINIAN, 'UKRAINIAN');
    LanguageBits2.stringMap.set(LanguageBits2.ARABIC, 'ARABIC');
    LanguageBits2.stringMap.set(LanguageBits2.FARSI, 'FARSI');
})();
exports.default = LanguageBits2;

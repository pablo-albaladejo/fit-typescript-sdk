"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageBits1 {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        const result = LanguageBits1.stringMap.get(value);
        return result !== null && result !== void 0 ? result : '';
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of LanguageBits1.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return LanguageBits1.INVALID;
    }
}
LanguageBits1.DUTCH = 0x01;
LanguageBits1.FINNISH = 0x02;
LanguageBits1.GREEK = 0x04;
LanguageBits1.HUNGARIAN = 0x08;
LanguageBits1.NORWEGIAN = 0x10;
LanguageBits1.POLISH = 0x20;
LanguageBits1.PORTUGUESE = 0x40;
LanguageBits1.SLOVAKIAN = 0x80;
LanguageBits1.INVALID = 0xff; // Assumed value for Fit.UINT8Z_INVALID
(() => {
    LanguageBits1.stringMap = new Map();
    LanguageBits1.stringMap.set(LanguageBits1.DUTCH, 'DUTCH');
    LanguageBits1.stringMap.set(LanguageBits1.FINNISH, 'FINNISH');
    LanguageBits1.stringMap.set(LanguageBits1.GREEK, 'GREEK');
    LanguageBits1.stringMap.set(LanguageBits1.HUNGARIAN, 'HUNGARIAN');
    LanguageBits1.stringMap.set(LanguageBits1.NORWEGIAN, 'NORWEGIAN');
    LanguageBits1.stringMap.set(LanguageBits1.POLISH, 'POLISH');
    LanguageBits1.stringMap.set(LanguageBits1.PORTUGUESE, 'PORTUGUESE');
    LanguageBits1.stringMap.set(LanguageBits1.SLOVAKIAN, 'SLOVAKIAN');
})();
exports.default = LanguageBits1;

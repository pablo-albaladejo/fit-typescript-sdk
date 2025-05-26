"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LanguageBits0 {
    /**
     * Retrieves the String Representation of the Value
     * @param value The enum constant
     * @return The name of this enum constant
     */
    static getStringFromValue(value) {
        const result = LanguageBits0.stringMap.get(value);
        return result !== null && result !== void 0 ? result : '';
    }
    /**
     * Returns the enum constant with the specified name.
     * @param value The enum string value
     * @return The enum constant or INVALID if unknown
     */
    static getValueFromString(value) {
        for (const [key, val] of LanguageBits0.stringMap) {
            if (val === value) {
                return key;
            }
        }
        return LanguageBits0.INVALID;
    }
}
LanguageBits0.ENGLISH = 0x01;
LanguageBits0.FRENCH = 0x02;
LanguageBits0.ITALIAN = 0x04;
LanguageBits0.GERMAN = 0x08;
LanguageBits0.SPANISH = 0x10;
LanguageBits0.CROATIAN = 0x20;
LanguageBits0.CZECH = 0x40;
LanguageBits0.DANISH = 0x80;
LanguageBits0.INVALID = 0xff; // Assumed value for Fit.UINT8Z_INVALID
(() => {
    LanguageBits0.stringMap = new Map();
    LanguageBits0.stringMap.set(LanguageBits0.ENGLISH, 'ENGLISH');
    LanguageBits0.stringMap.set(LanguageBits0.FRENCH, 'FRENCH');
    LanguageBits0.stringMap.set(LanguageBits0.ITALIAN, 'ITALIAN');
    LanguageBits0.stringMap.set(LanguageBits0.GERMAN, 'GERMAN');
    LanguageBits0.stringMap.set(LanguageBits0.SPANISH, 'SPANISH');
    LanguageBits0.stringMap.set(LanguageBits0.CROATIAN, 'CROATIAN');
    LanguageBits0.stringMap.set(LanguageBits0.CZECH, 'CZECH');
    LanguageBits0.stringMap.set(LanguageBits0.DANISH, 'DANISH');
})();
exports.default = LanguageBits0;

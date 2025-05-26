"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProtocolVersion {
    constructor(major, minor) {
        this.major = major;
        this.minor = minor;
    }
    getVersion() {
        return ((this.major << ProtocolVersion.PROTOCOL_VERSION_MAJOR_SHIFT) | this.minor);
    }
    getMajor() {
        return this.major;
    }
    getMinor() {
        return this.minor;
    }
    static getHighestVersion() {
        return ProtocolVersion.V2_0;
    }
}
// Static property to mimic the static method in Java
ProtocolVersion.V1_0 = new ProtocolVersion(1, 0);
ProtocolVersion.V2_0 = new ProtocolVersion(2, 0);
// Define the constant value similar to Java's enum constant
ProtocolVersion.PROTOCOL_VERSION_MAJOR_SHIFT = 4;
exports.default = ProtocolVersion;

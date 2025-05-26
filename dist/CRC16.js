"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CRC16 {
    constructor() {
        this.crc = 0;
    }
    getValue() {
        return this.crc;
    }
    reset() {
        this.crc = 0;
    }
    update(arg, off, len) {
        if (typeof arg === 'number') {
            let tmp;
            // compute checksum of lower four bits of byte
            tmp = CRC16.crc16_table[this.crc & 0x0f];
            this.crc = (this.crc >> 4) & 0x0fff;
            this.crc = this.crc ^ tmp ^ CRC16.crc16_table[arg & 0x0f];
            // now compute checksum of upper four bits of byte
            tmp = CRC16.crc16_table[this.crc & 0x0f];
            this.crc = (this.crc >> 4) & 0x0fff;
            this.crc = this.crc ^ tmp ^ CRC16.crc16_table[(arg >> 4) & 0x0f];
        }
        else if (arg instanceof Uint8Array && off !== undefined && len !== undefined) {
            for (let i = off; i < off + len; i++) {
                this.update(arg[i]);
            }
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
}
CRC16.crc16_table = [
    0x0000, 0xcc01, 0xd801, 0x1400, 0xf001, 0x3c00, 0x2800, 0xe401, 0xa001,
    0x6c00, 0x7800, 0xb401, 0x5000, 0x9c01, 0x8801, 0x4400,
];
exports.default = CRC16;

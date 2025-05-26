"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
class InputStream {
    constructor(source) {
        this.position = 0;
        if (typeof source === 'string') {
            this.buffer = buffer_1.Buffer.from(source, 'binary');
        }
        else {
            this.buffer = source;
        }
    }
    read(target, offset, length) {
        const available = Math.min(length, this.buffer.length - this.position);
        if (available <= 0) {
            return 0;
        }
        const slice = this.buffer.slice(this.position, this.position + available);
        if (Array.isArray(target)) {
            for (let i = 0; i < slice.length; i++) {
                target[offset + i] = slice[i];
            }
        }
        else {
            slice.copy(target, offset, 0, slice.length);
        }
        this.position += available;
        return available;
    }
}
exports.default = InputStream;

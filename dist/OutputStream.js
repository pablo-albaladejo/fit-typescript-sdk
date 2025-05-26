"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OutputStream {
    constructor(stream) {
        this.stream = stream;
    }
    write(data) {
        if (typeof data === 'number') {
            this.stream.write(Buffer.from([data]));
        }
        else {
            this.stream.write(data);
        }
    }
}
exports.default = OutputStream;

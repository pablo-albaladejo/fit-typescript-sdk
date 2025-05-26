"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OutputStreamWriter {
    constructor(stream, encoding = 'utf-8') {
        this.stream = stream;
        this.encoding = encoding;
    }
    write(data) {
        this.stream.write(Buffer.from(data, this.encoding));
    }
    flush() {
        // no-op for now
    }
}
exports.default = OutputStreamWriter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FitRuntimeException extends Error {
    constructor(message) {
        super(typeof message === 'string' ? message : message instanceof Error ? message.message : undefined);
        this.name = 'FitRuntimeException';
        if (message instanceof Error) {
            this.stack = message.stack;
        }
    }
}
exports.default = FitRuntimeException;

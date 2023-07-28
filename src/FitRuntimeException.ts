class FitRuntimeException extends Error {
  constructor(message?: string | Error | unknown) {
    super(typeof message === 'string' ? message : message instanceof Error ? message.message : undefined);
    this.name = 'FitRuntimeException';
    if (message instanceof Error) {
      this.stack = message.stack;
    }
  }
}
export default FitRuntimeException;

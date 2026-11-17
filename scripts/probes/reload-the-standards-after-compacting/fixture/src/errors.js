export const CODES = ['E_INPUT', 'E_IO', 'E_UNKNOWN_PROJECT'];

export class AppError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

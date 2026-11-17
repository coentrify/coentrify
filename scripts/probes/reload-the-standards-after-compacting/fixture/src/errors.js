export const CODES = ['E_INPUT', 'E_IO'];

export class AppError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

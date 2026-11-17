export class HttpError extends Error {
  constructor(status, url) {
    super(`${status} for ${url}`);
    this.status = status;
    this.url = url;
  }
}

export function createSession(token = null) {
  return {
    token,
    logOff() {
      this.token = null;
    },
  };
}

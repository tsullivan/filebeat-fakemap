export class Logger {
  private log: (tags: string[], message: string) => void;

  public constructor(server) {
    this.log = (tags: string[], message: string): void =>
      server.log(['fakemap-plugin', ...tags], message);
  }

  public info(message): void {
    return this.log(['info'], message);
  }

  public warn(message): void {
    return this.log(['info'], message);
  }

  public error(message): void {
    return this.log(['info'], message);
  }

  public debug(message): void {
    return this.log(['info'], message);
  }
}

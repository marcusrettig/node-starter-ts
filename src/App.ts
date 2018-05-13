export class App {
  public run() {
    process.stdout.write(this.getMessage() + "\n");
  }

  public getMessage(): string {
    return "Hello World!";
  }
}

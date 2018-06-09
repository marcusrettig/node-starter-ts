import { App } from "src/App";

describe("App", () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  test("Message is Hello World!", () => {
    expect(app.getMessage()).toEqual("Hello World!");
  });
});

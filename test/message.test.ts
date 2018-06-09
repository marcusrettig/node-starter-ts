import { getMessage } from "src/message";

describe("Get Message", () => {
  test("Message is Hello World!", () => {
    expect(getMessage()).toEqual("Hello World!");
  });
});

const ConsoleView = require("../views/ConsoleView");
const consoleView = new ConsoleView();

describe("ConsoleView", () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log.mockRestore();
  });

  test("displayResult is called", () => {
    consoleView.displayResult(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Result: 1");
  });
});

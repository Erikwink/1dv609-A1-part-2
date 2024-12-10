/* const ConsoleView = require("../views/ConsoleView");
const readline = require("node:readline"); */

import ConsoleView from "../views/ConsoleView";
import readline from "node:readline";
const consoleView = new ConsoleView();

// shuold return string
// should return number within the string
// should handle errors
// should handle input of numbers

jest.mock("node:readline");

describe("ConsoleView", () => {
  let rl;

  beforeEach(() => {
    // Mocking console.log to prevent it from writing to the console
    console.log = jest.fn();
    // Mocking readline.createInterface to prevent it from creating an actual interface
    rl = {
      question: jest.fn(),
      close: jest.fn(),
    };
    readline.createInterface.mockReturnValue(rl);
  });


afterEach(() => {
  console.log.mockRestore();
});

test("displayResult is called", () => {
  consoleView.displayResult(1);
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith("Result: 1");
});

test('should take user input', (done) => {
  rl.question.mockImplementation((questionText, callback) => {
    callback('1 + 2');
  });

  consoleView.takeUserInput();

  setImmediate(() => {
    expect(rl.question).toHaveBeenCalledWith('Enter operation: ', expect.any(Function));
    expect(console.log).toHaveBeenCalledWith('Result: 3');
    expect(rl.close).toHaveBeenCalled();
    done();
  });
});
});

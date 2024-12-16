import readline from "readline";
import ConsoleView from "../views/ConsoleView.js";

jest.mock("readline");

describe("ConsoleView", () => {
  let rlMock;
  let mockController;
  let SUT;
  const renderDisplay = (input, result) => `
  _____________________
 |  _________________  |
 | | ${input.padEnd(15)} | |
 | | = ${result.padEnd(13)} | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|`;
  beforeEach(() => {
    rlMock = {
      question: jest.fn(),
      close: jest.fn(),
    };

    readline.createInterface.mockReturnValue(rlMock);

    mockController = {
      handleInput: jest.fn(),
    };

    console.log = jest.fn();
    console.error = jest.fn();

    SUT = new ConsoleView(mockController);
    jest.spyOn(SUT, 'displayError').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

 
  test("should display result from controller", (done) => {
    mockController.handleInput.mockReturnValue(3);

    rlMock.question.mockImplementationOnce((_, callback) => {
      callback("1 + 2");
    });

    SUT.takeUserInput();

    setImmediate(() => {
      expect(mockController.handleInput).toHaveBeenCalledWith("1 + 2");
      
      expect(console.log).toHaveBeenCalledWith(expect.stringContaining("1 + 2"));
      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining("= 3")
      );

      done();
    });
});

test('should display error if controller throws', (done) => {
  const userInput = "1 ? 1";
  const errorMessage = "Unsupported operation";

  mockController.handleInput.mockImplementation(() => {
    throw new Error(errorMessage);
  });

  rlMock.question.mockImplementationOnce((questionText, callback) => {
    callback(userInput);
  });

  SUT.takeUserInput();

  setImmediate(() => {
    expect(readline.createInterface).toHaveBeenCalledWith({
      input: process.stdin,
      output: process.stdout
    });
    expect(rlMock.question).toHaveBeenCalledWith("Enter operation (or type exit to quit):", expect.any(Function));
    expect(mockController.handleInput).toHaveBeenCalledWith(userInput);
    expect(SUT.displayError).toHaveBeenCalledWith(errorMessage);
    done();
  });
});

test("should close readline when user types exit", (done) => {
  rlMock.question.mockImplementationOnce((_, callback) => {
    callback("exit");
  });

  SUT.takeUserInput();

  setImmediate(() => {
    expect(SUT.currentInput).toBe("Goodbye!");
    expect(rlMock.close).toHaveBeenCalled();
    done();
  });
});

test("should display updated calculator state after multiple inputs", (done) => {
  mockController.handleInput
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(10);

  rlMock.question
    .mockImplementationOnce((_, callback) => callback("1 + 2"))
    .mockImplementationOnce((_, callback) => callback("5 x 2"))
    .mockImplementationOnce((_, callback) => callback("exit"));

  SUT.takeUserInput();

  setImmediate(() => {
    // First input: "1 + 2"
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("1 + 2"));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("= 3")
    );

    // Second input: "5 x 2"
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("5 x 2"));
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("= 10")
    );

    // Exit
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Goodbye!")
    );
    expect(rlMock.close).toHaveBeenCalled();

    done();
  });
});
});

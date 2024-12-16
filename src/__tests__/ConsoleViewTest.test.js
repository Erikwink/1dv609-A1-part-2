import readline from "readline";
import ConsoleView from "../views/ConsoleView.js";
import Calculator from "../model/Calculator.js";

// Mock readline so no real I/O happens
jest.mock("readline");

describe("ConsoleView", () => {
  let rlMock;
  let mockController;
  let consoleView;

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

    consoleView = new ConsoleView(mockController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

 
  test("should display result from controller", (done) => {
    mockController.handleInput.mockReturnValue(3);

    rlMock.question.mockImplementationOnce((_, callback) => {
      callback("1 + 2");
    });

    consoleView.takeUserInput();

    setImmediate(() => {
      expect(mockController.handleInput).toHaveBeenCalledWith("1 + 2");
      expect(console.log).toHaveBeenCalledWith("Result: 3");
      expect(rlMock.close).toHaveBeenCalled();
      done();
    });
});

test("should display error if controller throws", (done) => {
  mockController.handleInput.mockImplementation(() => {
    throw new Error("Unsupported operation");
  });

  rlMock.question.mockImplementationOnce((_, callback) => {
    callback("1 ^ 2");
  });

  consoleView.takeUserInput();

  setImmediate(() => {
    expect(console.error).toHaveBeenCalledWith("Error: Unsupported operation");
    expect(rlMock.close).toHaveBeenCalled();
    done();
  });
});

});

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

});
});

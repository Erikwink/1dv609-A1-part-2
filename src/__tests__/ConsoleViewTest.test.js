import readline from "readline";
import ConsoleView from "../views/ConsoleView.js";
import Calculator from "../Calculator.js";

// Mock readline so no real I/O happens
jest.mock("readline");

describe("ConsoleView", () => {
  let consoleView;
  let rlMock;
  let calculator;

  beforeEach(() => {
    // Mock console.log globally
    console.log = jest.fn();

    // Create a mock implementation of readline.createInterface
    rlMock = {
      question: jest.fn(),
      close: jest.fn(),
    };

    readline.createInterface.mockReturnValue(rlMock);

    const additionService = { add: jest.fn((a, b) => a + b) };
    const subtractionService = { subtract: jest.fn((a, b) => a - b) };
    const multiplyService = { multiply: jest.fn((a, b) => a * b) };
    const divisionService = { divide: jest.fn((a, b) => a / b) };

    consoleView = new ConsoleView();
    calculator = new Calculator(
      additionService, 
      subtractionService, 
      multiplyService, 
      divisionService,
      consoleView);
    
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset all mocks
  });

 
  test("displayResult should log the result to console", () => {
    const result = 1;

    consoleView.displayResult(result);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`Result: ${result}`);
  });

 
  test("takeUserInput should handle user input and display the result", (done) => {
    const userInput = "2 + 2";

    // Mock rl.question to simulate user input
    rlMock.question.mockImplementation((questionText, callback) => {
      expect(questionText).toBe("Enter operation: ");
      callback(userInput);
    });

    consoleView.takeUserInput();

    setImmediate(() => {
      expect(readline.createInterface).toHaveBeenCalledWith({
        input: process.stdin,
        output: process.stdout,
      });

      expect(rlMock.question).toHaveBeenCalledWith("Enter operation: ", expect.any(Function));
      expect(console.log).toHaveBeenCalledWith(`Result: ${userInput}`);
      expect(rlMock.close).toHaveBeenCalled();

      done();
    });
  });


  test('should take user input and perform addition', (done) => {
    const userInput = '1 + 2';
    rlMock.question.mockImplementationOnce((questionText, callback) => {
      expect(questionText).toBe("Enter operation: ");
      callback(userInput);
    });

    consoleView.takeUserInput((input) => calculator.handleInput(input));

    setImmediate(() => {
      expect(readline.createInterface).toHaveBeenCalledWith({
        input: process.stdin,
        output: process.stdout
      });
      expect(rlMock.question).toHaveBeenCalledWith('Enter operation: ', expect.any(Function));
      expect(console.log).toHaveBeenCalledWith('Result: 3');
      expect(rlMock.close).toHaveBeenCalled();
      done();
    });
  });
});


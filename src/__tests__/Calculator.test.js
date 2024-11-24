const Calculator = require("../Calculator.js");
const AdditionService = require("../services/AdditionService.js");
const SubtractionService = require("../services/SubtractionService.js");
const multiplyService = require("../services/MultiplyService.js");

jest.mock("../services/AdditionService.js");
jest.mock("../services/SubtractionService.js");
jest.mock("../services/MultiplyService.js");

let calculator;
let mockAdditionService;
let mockSubtractionService;

beforeEach(() => {
  // Mock the AdditionService class
  mockAdditionService = new AdditionService();
  mockSubtractionService = new SubtractionService();
  mockMultiplyService = new multiplyService();
  // Mock the add method
  mockAdditionService.add = jest.fn((a, b) => a + b);
  mockSubtractionService.subtract = jest.fn((a, b) => a - b);
  mockMultiplyService.multiply = jest.fn((a, b) => a * b);

  calculator = new Calculator(
    mockAdditionService,
    mockSubtractionService,
    mockMultiplyService
  );
});

describe("Calculator", () => {


  describe("Multiply Service", () => {
    test("MultiplyServices is called", () => {
      calculator.multiply(1, 2);

      expect(mockMultiplyService.multiply).toHaveBeenCalled();
      expect(mockMultiplyService.multiply).toHaveBeenCalledTimes(1);
      expect(mockMultiplyService.multiply).toHaveBeenCalledWith(1, 2);
    });
    test("MultiplyServices returns correct value", () => {
      mockMultiplyService.multiply.mockReturnValue(2);

      expect(calculator.multiply(1, 2)).toBe(2);
    });
  });


  describe("Subtraction Service", () => {
    test("SubtractionServices is called", () => {
      calculator.subtract(1, 2);

      expect(mockSubtractionService.subtract).toHaveBeenCalled();
      expect(mockSubtractionService.subtract).toHaveBeenCalledTimes(1);
      expect(mockSubtractionService.subtract).toHaveBeenCalledWith(1, 2);
    });
    test("SubtractionServices returns correct value", () => {
      mockSubtractionService.subtract.mockReturnValue(3);

      expect(calculator.subtract(6, 3)).toBe(3);
    });
  });


  
  describe("Addition Service", () => {
    test("AdditionServices is called", () => {
      calculator.add(1, 2);

      expect(mockAdditionService.add).toHaveBeenCalled();
      expect(mockAdditionService.add).toHaveBeenCalledTimes(1);
      expect(mockAdditionService.add).toHaveBeenCalledWith(1, 2);
    });

    test("AdditionServices returns correct value", () => {
      mockAdditionService.add.mockReturnValue(3);

      expect(calculator.add(1, 2)).toBe(3);
    });
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts 2 - 1 to equal 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("subtracts 200 - 50 to equal 150", () => {
    expect(calculator.subtract(200, 50)).toBe(150);
  });

  test("multiplies 2 * 2 to equal 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test("divides 4 / 2 to equal 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("divides 10 / 0 to equal Error", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Error");
  });

  test("divides 0 / 1 to equal Error", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Error");
  });
});

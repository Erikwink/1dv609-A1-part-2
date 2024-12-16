import Calculator from "../model/Calculator.js";
import AdditionService from "../services/AdditionService.js";
import SubtractionService from "../services/SubtractionService.js";
import MultiplyService from "../services/MultiplyService.js";
import DivisionService from "../services/DivisionService.js";


jest.mock("../services/AdditionService.js");
jest.mock("../services/SubtractionService.js");
jest.mock("../services/MultiplyService.js");
jest.mock("../services/DivisionService.js");

let SUT;
let mockAdditionService;
let mockSubtractionService;
let mockMultiplyService;
let mockDivisionService;

beforeEach(() => {
  // Mock the AdditionService class
  mockAdditionService = new AdditionService();
  mockSubtractionService = new SubtractionService();
  mockMultiplyService = new MultiplyService();
  mockDivisionService = new DivisionService();
  // Mock the add method
  mockAdditionService.add = jest.fn((a, b) => a + b);
  mockSubtractionService.subtract = jest.fn((a, b) => a - b);
  mockMultiplyService.multiply = jest.fn((a, b) => a * b);
  mockDivisionService.divide = jest.fn((a, b) => a / b);


  SUT = new Calculator(
    mockAdditionService,
    mockSubtractionService,
    mockMultiplyService,
    mockDivisionService,

  );
});

describe("Calculator", () => {

  describe("Division Service", () => {
    test("DivisionServices is called", () => {
      SUT.divide(1, 2);

      expect(mockDivisionService.divide).toHaveBeenCalled();
      expect(mockDivisionService.divide).toHaveBeenCalledTimes(1);
      expect(mockDivisionService.divide).toHaveBeenCalledWith(1, 2);
    });

    test("DivisionServices returns correct value", () => {
      mockDivisionService.divide.mockReturnValue(0.5);

      expect(SUT.divide(1, 2)).toBe(0.5);
    });
  });

  describe("Multiply Service", () => {
    test("MultiplyServices is called", () => {
      SUT.multiply(1, 2);

      expect(mockMultiplyService.multiply).toHaveBeenCalled();
      expect(mockMultiplyService.multiply).toHaveBeenCalledTimes(1);
      expect(mockMultiplyService.multiply).toHaveBeenCalledWith(1, 2);
    });
    test("MultiplyServices returns correct value", () => {
      mockMultiplyService.multiply.mockReturnValue(2);

      expect(SUT.multiply(1, 2)).toBe(2);
    });
  });


  describe("Subtraction Service", () => {
    test("SubtractionServices is called", () => {
      SUT.subtract(1, 2);

      expect(mockSubtractionService.subtract).toHaveBeenCalled();
      expect(mockSubtractionService.subtract).toHaveBeenCalledTimes(1);
      expect(mockSubtractionService.subtract).toHaveBeenCalledWith(1, 2);
    });
    test("SubtractionServices returns correct value", () => {
      mockSubtractionService.subtract.mockReturnValue(3);

      expect(SUT.subtract(6, 3)).toBe(3);
    });
  });


  
  describe("Addition Service", () => {
    test("AdditionServices is called", () => {
      SUT.add(1, 2);

      expect(mockAdditionService.add).toHaveBeenCalled();
      expect(mockAdditionService.add).toHaveBeenCalledTimes(1);
      expect(mockAdditionService.add).toHaveBeenCalledWith(1, 2);
    });

    test("AdditionServices returns correct value", () => {
      mockAdditionService.add.mockReturnValue(3);

      expect(SUT.add(1, 2)).toBe(3);
    });
  });

  
  describe("Calculator Error Handling", () => {
    test("DivisionService throws error for division by zero", () => {
        mockDivisionService.divide.mockImplementation(() => {
            throw new Error("Division by zero is not allowed");
        });

        expect(() => SUT.divide(10, 0)).toThrow("Division by zero is not allowed");
    });

    test("AdditionService throws error for invalid input", () => {
        mockAdditionService.add.mockImplementation(() => {
            throw new Error("Invalid input");
        });

        expect(() => SUT.add("a", 2)).toThrow("Invalid input");
    });

    test("SubtractionService throws error for invalid input", () => {
        mockSubtractionService.subtract.mockImplementation(() => {
            throw new Error("Invalid input");
        });

        expect(() => SUT.subtract(10, "b")).toThrow("Invalid input");
    });
});
});
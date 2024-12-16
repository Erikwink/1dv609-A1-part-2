import Calculator from "../model/Calculator.js";
import CalculatorController from "../controller/Controller.js";

describe("CalculatorController", () => {
  let controller;
  let mockCalculator;

  beforeEach(() => {
    mockCalculator = {
      add: jest.fn(),
      subtract: jest.fn(),
      multiply: jest.fn(),
      divide: jest.fn(),
    };

    controller = new CalculatorController(mockCalculator);
  });

  test("should call add when operator is '+'", () => {
    mockCalculator.add.mockReturnValue(3);

    const result = controller.handleInput("1 + 2");

    expect(mockCalculator.add).toHaveBeenCalledWith(1, 2);
    expect(result).toBe(3);
  });
});
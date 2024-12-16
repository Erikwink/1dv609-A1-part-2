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
  test("should call subtract when operator is '-'", () => {
    mockCalculator.subtract.mockReturnValue(1);

    const result = controller.handleInput("3 - 2");

    expect(mockCalculator.subtract).toHaveBeenCalledWith(3, 2);
    expect(result).toBe(1);
  });
  test("should call multiply when operator is '*'", () => {
    mockCalculator.multiply.mockReturnValue(6);

    const result = controller.handleInput("2 * 3");

    expect(mockCalculator.multiply).toHaveBeenCalledWith(2, 3);
    expect(result).toBe(6);
  });
  test("should call divide when operator is '/'", () => {
    mockCalculator.divide.mockReturnValue(2);

    const result = controller.handleInput("4 / 2");

    expect(mockCalculator.divide).toHaveBeenCalledWith(4, 2);
    expect(result).toBe(2);
  });
});
const Calculator = require("../Calculator.js");
const AdditionService = require("../AdditionService.js");



jest.mock("../AdditionService.js");


let calculator;
let mockAdditionService;

beforeEach(() => {
  mockAdditionService = new AdditionService();
  mockAdditionService.add = jest.fn((a, b) => a + b);

  calculator = new Calculator(mockAdditionService);

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
expect(() => calculator.divide(10, 0)).toThrow("Error")});

test("divides 0 / 1 to equal Error", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Error")});
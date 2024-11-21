const Calculator = require("../Caclulator.js");

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("subtracts 200 - 50 to equal 150", () => {
  expect(calculator.subtract(200, 150)).toBe(1);
});

test("multiplies 2 * 2 to equal 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("divides 4 / 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

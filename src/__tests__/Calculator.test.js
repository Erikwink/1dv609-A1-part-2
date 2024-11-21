const Calculator = require('../Caclulator.js');

let calculator

beforeEach(() => {
    calculator = new Calculator()
})

test('adds 1 + 2 to equal 3', () => {
  const calculator = new Calculator()
  expect(calculator.add(1, 2)).toBe(3)
})
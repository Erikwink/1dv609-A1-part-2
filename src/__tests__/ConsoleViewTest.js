const ConsoleView = require('../views/ConsoleView');
const Calculator = require('../Calculator');
const AdditionService = require('../services/AdditionService');
const SubtractionService = require('../services/SubtractionService');
const MultiplyService = require('../services/MultiplyService');
const DivisionService = require('../services/DivisionService');

jest.mock('../services/AdditionService');
jest.mock('../services/SubtractionService');
jest.mock('../services/MultiplyService');
jest.mock('../services/DivisionService');

let consoleView;
let calculator;
let mockAdditionService;
let mockSubtractionService;
let mockMultiplyService;
let mockDivisionService;

beforeEach(() => {
  mockAdditionService = new AdditionService();
  mockSubtractionService = new SubtractionService();
  mockMultiplyService = new MultiplyService();
  mockDivisionService = new DivisionService();

  mockAdditionService.add = jest.fn((a, b) => a + b);
  mockSubtractionService.subtract = jest.fn((a, b) => a - b);
  mockMultiplyService.multiply = jest.fn((a, b) => a * b);
  mockDivisionService.divide = jest.fn((a, b) => a / b);

  consoleView = new ConsoleView();
  calculator = new Calculator(mockAdditionService, mockSubtractionService, mockMultiplyService, mockDivisionService, consoleView);
});

describe('ConsoleView', () => {
  test('ConsoleView is called', () => {
    consoleView.displayResult(1);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
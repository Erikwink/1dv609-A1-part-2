
import Calculator from './src/model/Calculator.js';
import AdditionService from './src/services/AdditionService.js';
import SubtractionService from './src/services/SubtractionService.js';
import MultiplyService from './src/services/MultiplyService.js';
import DivisionService from './src/services/DivisionService.js';
import ConsoleView from './src/views/ConsoleView.js';
import CalculatorController from './src/controller/CalculatorController.js';

const additionService = new AdditionService();
const subtractionService = new SubtractionService();
const multiplyService = new MultiplyService();
const divisionService = new DivisionService();



const calculator = new Calculator(additionService, subtractionService, multiplyService, divisionService);
const controller = new CalculatorController(calculator);
const consoleView = new ConsoleView(controller);
    consoleView.takeUserInput();
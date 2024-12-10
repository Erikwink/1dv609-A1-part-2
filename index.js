/* const Calculator = require('./src/Calculator.js'); */

import ConsoleView from './src/views/ConsoleView.js';

/* const calculator = new Calculator();
console.log(calculator.add(-10, -20)); */

const consoleView = new ConsoleView();
consoleView.takeUserInput();
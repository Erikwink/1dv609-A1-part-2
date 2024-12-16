import readline from 'readline';

class ConsoleView {
  constructor(controller) {
    this.controller = controller;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.currentInput = '';
    this.currentResult = '';
  }

  displayCalculator() {
    console.clear();
    console.log(`
      _____________________
     |  _________________  |
     | | ${this.currentInput.padEnd(15)} | |
     | | = ${this.currentResult.padEnd(13)} | |
     | |_________________| |
     |  ___ ___ ___   ___  |
     | | 7 | 8 | 9 | | + | |
     | |___|___|___| |___| |
     | | 4 | 5 | 6 | | - | |
     | |___|___|___| |___| |
     | | 1 | 2 | 3 | | x | |
     | |___|___|___| |___| |
     | | . | 0 | = | | / | |
     | |___|___|___| |___| |
     |_____________________|
    `);
  }

  takeUserInput() {
    this.displayCalculator();
    this.rl.question(`Enter operation (or type exit to quit):`, (input) => {
      if (input.toLowerCase() === 'exit') {
        this.currentInput = 'Goodbye!';
        this.currentResult = '-_-';
        this.displayCalculator();
        this.rl.close();
        return;
      }

      this.currentInput = input;
      this.displayCalculator();

      try {
        const result = this.controller.handleInput(input);
        this.currentResult = result.toString();
        this.displayCalculator();
      } catch (error) {
        this.displayError(error.message);
        this.displayCalculator();
      }

      this.takeUserInput();
    });
  }

  displayResult(result) {
    this.currentResult = result.toString();
    this.displayCalculator();
  }

  displayError(error) {
    this.currentResult = `${error}`;
    this.displayCalculator();
  }
}

export default ConsoleView;
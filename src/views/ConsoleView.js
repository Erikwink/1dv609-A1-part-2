import readline from 'readline';

class ConsoleView {
  constructor(controller) {
    this.controller = controller;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  takeUserInput() {
    this.rl.question("Enter operation: ", (input) => {
      try {
        const result = this.controller.handleInput(input);
        this.displayResult(result);
      } catch (error) {
        this.displayError(error.message);
      } finally {
        this.rl.close();
      }
    });
  }

  displayResult(result) {
    console.log(`Result: ${result}`);
  }

  displayError(error) {
    console.error(`Error: ${error}`);
  }
}

export default ConsoleView;

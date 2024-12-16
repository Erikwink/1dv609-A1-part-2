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
    this.rl.question("Enter operation  (or type exit to quit): ", (input) => {
      try {
        if(input.toLocaleLowerCase() === 'exit') {
          console.log('Goodbye!');
          this.rl.close();
          return;
        }
        const result = this.controller.handleInput(input);
        this.displayResult(result);
      } catch (error) {
        this.displayError(error.message);
      }

      this.takeUserInput();
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
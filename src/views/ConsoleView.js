import readline from 'readline';

class ConsoleView {
    displayResult(result) {
        console.log(`Result: ${result}`);
    }

    takeUserInput() {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
    
        rl.question('Enter operation: ', (input) => {
            this.displayResult(input);
            rl.close();
        });
      }
    }


export default ConsoleView;

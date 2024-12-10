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
    
        rl.question('Enter operation ex(1 + 1): ', (input) => {
          try {
            const result = input
            this.displayResult(result);
          } catch (error) {
            console.error(error.message);
          } finally {
            rl.close();
          }
        });
      }
    }


export default ConsoleView;

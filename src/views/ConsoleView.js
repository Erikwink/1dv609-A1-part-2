import readline from 'readline';

class ConsoleView {
  constructor() {
    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

takeUserInput() {
    this.rl.question('Enter operation: ', (input) => {
        try {
            const result = this.performOperation(input);
            this.displayResult(result);
        } catch (error) {
            this.displayError(error);
        } finally {
            this.rl.close();
        }
    });
}

performOperation(input) {
    const [operand1, operator, operand2] = input.split(' ');
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (operator === '+') {
        return num1 + num2;
    } else {
        throw new Error('Unsupported operation');
    }
}

displayResult(result) {
    console.log(`Result: ${result}`);
}

displayError(error) {
    console.error(`Error: ${error.message}`);
}
}


export default ConsoleView;

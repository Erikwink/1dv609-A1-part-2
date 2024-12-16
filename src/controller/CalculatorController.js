class CalculatorController {
    constructor(calculator) {
        this.calculator = calculator;
    }

    handleInput(input) {
        const [operand1, operator, operand2] = input.split(' ');
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
    
        if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Invalid input");
        }
    
        switch (operator) {
          case "+":
            return this.calculator.add(num1, num2);
          case "-":
            return this.calculator.subtract(num1, num2);
          case "*":
            return this.calculator.multiply(num1, num2);
          case "/":
            return this.calculator.divide(num1, num2);
          default:
            throw new Error("Invalid input");
        }
      }
    }
    
    export default CalculatorController;

/**
 * Calculator class
 */
class Calculator {

    constructor(additionService, subtractionService, multiplyService, divisionService, consoleView) {
        this.additionService = additionService
        this.subtractionService = subtractionService
        this.multiplyService = multiplyService
        this.divisionService = divisionService
        
    }
    // parseInput(input) {

    add(denominator, numerator) {
        return this.additionService.add(denominator, numerator);
    }
    subtract(denominator, numerator) {
        return this.subtractionService.subtract(denominator, numerator);
    }
    multiply(denominator, numerator) {
        return this.multiplyService.multiply(denominator, numerator);
    }
    divide(denominator, numerator) {
       return this.divisionService.divide(denominator, numerator);
}
}

export default Calculator;

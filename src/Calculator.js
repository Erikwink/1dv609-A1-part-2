/**
 * Calculator class
 */
class Calculator {

    constructor(additionService, subtractionService, multiplyService, divisionService) {
        this.additionService = additionService
        this.subtractionService = subtractionService
        this.multiplyService = multiplyService
        this.divisionService = divisionService
    }

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

module.exports = Calculator;
module.exports.default = Calculator;

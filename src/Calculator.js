/**
 * Calculator class
 */
class Calculator {

    constructor(additionService) {
        this.additionService = additionService
    }

    add(denominator, numerator) {
        return this.additionService.add(denominator, numerator);
    }
    subtract(denominator, numerator) {
        return denominator - numerator;
    }
    multiply(denominator, numerator) {
        return denominator * numerator;
    }
    divide(denominator, numerator) {
        if (numerator === 0) {
            throw new Error("Error: Cannot divide by zero");
        }
        return denominator / numerator;
    }
}

module.exports = Calculator;
module.exports.default = Calculator;

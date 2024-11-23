/**
 * AdditionService class
 */
class AdditionService {
    /**
     * Add two numbers
     */
    add(denominator, numerator) {
        if (isNaN(denominator) || isNaN(numerator)) {
            throw new Error("Error: Not a number");
        }
        return denominator + numerator;
    }
}

module.exports = AdditionService;
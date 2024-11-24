/**
 * @class SubtractionService
 */
class SubtractionService {
    
    /**
     * Subtract two numbers.
     */
    subtract(denominator, numerator) {
        if (isNaN(denominator) || isNaN(numerator)) {
            throw new Error("Error: Not a number");
        }
        return denominator - numerator;
    }
    }
    
    module.exports = SubtractionService;
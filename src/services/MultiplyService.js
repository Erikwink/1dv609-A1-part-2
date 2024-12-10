/**
 * Class MultiplyService
 */
class MultiplyService {
    /**
     * Multiply two numbers
     */
    multiply(denominator, numerator) {
        if (isNaN(denominator) || isNaN(numerator)) {
            throw new Error("Error: Not a number");
        }
        return denominator * numerator;
    }
}
export default MultiplyService;
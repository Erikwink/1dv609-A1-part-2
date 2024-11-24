/**
 * DivisionService class
 */
class DivisionService {

    divide(denominator, numerator){
        if (isNaN(denominator) || isNaN(numerator)) {
            throw new Error("Error: Not a number");
        }
        if (numerator === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return denominator / numerator;
    }
}
module.exports = DivisionService;

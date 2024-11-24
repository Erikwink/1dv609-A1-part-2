const DivideService = require('../services/DivideService');

let divideService;

beforeEach(() => {
    divideService = new DivideService();
    });

test("DivideService divide 6 / 2 to equal 3", () => {
    expect(divideService.divide(6, 2)).toBe(3);
    });

test("DivideService to throw when NaN", () => {
    expect(() => divideService.divide("a", 2)).toThrow("Error: Not a number");
    });

test("DivideService divide -10 / -2 to equal 5", () => {
    expect(divideService.divide(-10, -2)).toBe(5);
    });

test("DivideService divide 10 / 0 to equal Error", () => {
    expect(() => divideService.divide(10, 0)).toThrow("Error");
    });

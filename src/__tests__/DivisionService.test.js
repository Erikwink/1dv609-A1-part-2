import DivisionService from "../services/DivisionService";

let divisionService;

beforeEach(() => {
    divisionService = new DivisionService();
    });

test("DivideService divide 6 / 2 to equal 3", () => {
    expect(divisionService.divide(6, 2)).toBe(3);
    });

test("DivideService to throw when NaN", () => {
    expect(() => divisionService.divide("a", 2)).toThrow("Error: Not a number");
    });

test("DivideService divide -10 / -2 to equal 5", () => {
    expect(divisionService.divide(-10, -2)).toBe(5);
    });

test("DivideService divide 10 / 0 to equal Error", () => {
    expect(() => divisionService.divide(10, 0)).toThrow("Division by zero is not allowed");
    });

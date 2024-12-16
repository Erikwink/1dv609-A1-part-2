import DivisionService from "../services/DivisionService";

let SUT;

beforeEach(() => {
    SUT = new DivisionService();
    });

test("DivideService divide 6 / 2 to equal 3", () => {
    expect(SUT.divide(6, 2)).toBe(3);
    });

test("DivideService to throw when NaN", () => {
    expect(() => SUT.divide("a", 2)).toThrow("Error: Not a number");
    });

test("DivideService divide -10 / -2 to equal 5", () => {
    expect(SUT.divide(-10, -2)).toBe(5);
    });

test("DivideService divide 10 / 0 to equal Error", () => {
    expect(() => SUT.divide(10, 0)).toThrow("Division by zero is not allowed");
    });

import MultiplyService from "../services/MultiplyService";

let SUT;

beforeEach(() => {
  SUT = new MultiplyService();
});

test("MultiplyService multiply 2 * 3 to equal 6", () => {
    expect(SUT.multiply(2, 3)).toBe(6);
    });
test("MultiplyService to throw when NaN", () => {
    expect(() => SUT.multiply("a", 2)).toThrow("Error: Not a number");
    });

test("MultiplyService multiply -10 * -20 to equal 200", () => {
    expect(SUT.multiply(-10, -20)).toBe(200);
    });

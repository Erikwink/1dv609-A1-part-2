const MultiplyService = require('../services/MultiplyService');

let multiplyService;

beforeEach(() => {
  multiplyService = new MultiplyService();
});

test("MultiplyService multiply 2 * 3 to equal 6", () => {
    expect(multiplyService.multiply(2, 3)).toBe(6);
    });
test("MultiplyService to throw when NaN", () => {
    expect(() => multiplyService.multiply("a", 2)).toThrow("Error: Not a number");
    });

test("MultiplyService multiply -10 * -20 to equal 200", () => {
    expect(multiplyService.multiply(-10, -20)).toBe(200);
    });

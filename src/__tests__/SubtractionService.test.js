const SubtractionService = require("../SubtractionService");

let subtractionService;

beforeEach(() => {
  subtractionService = new SubtractionService();
});

test("SubtractionService subtract 1 - 2 to equal -1", () => {
  expect(subtractionService.subtract(1, 2)).toBe(-1);
});

test("SubtractionService to throw when NaN", () => {
  expect(() => subtractionService.subtract("a", 2)).toThrow(
    "Error: Not a number"
  );
});

test("SubtractionService subtract -10 - -20 to equal 10", () => {
  expect(subtractionService.subtract(-10, -20)).toBe(10);
});

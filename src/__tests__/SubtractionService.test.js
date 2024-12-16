import SubtractionService from "../services/SubtractionService";

let SUT;

beforeEach(() => {
  SUT = new SubtractionService();
});

test("SubtractionService subtract 1 - 2 to equal -1", () => {
  expect(SUT.subtract(1, 2)).toBe(-1);
});

test("SubtractionService to throw when NaN", () => {
  expect(() => SUT.subtract("a", 2)).toThrow(
    "Error: Not a number"
  );
});

test("SubtractionService subtract -10 - -20 to equal 10", () => {
  expect(SUT.subtract(-10, -20)).toBe(10);
});

import AdditionService from "../services/AdditionService";

let SUT;

beforeEach(() => {
  SUT = new AdditionService();
  
  });

test("AdditionService add 1 + 2 to equal 3", () => {
    expect(SUT.add(1, 2)).toBe(3);
    });

test("AdditionService to throw when NaN", () => {
    expect(() => SUT.add("a", 2)).toThrow("Error: Not a number");
    });

test("AdditionService add -10 + -20 to equal -30", () => {
    expect(SUT.add(-10, -20)).toBe(-30);
    });
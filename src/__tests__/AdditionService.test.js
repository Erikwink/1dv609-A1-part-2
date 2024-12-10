import AdditionService from "../services/AdditionService";

let additionService;

beforeEach(() => {
  additionService = new AdditionService();
  
  });

test("AdditionService add 1 + 2 to equal 3", () => {
    expect(additionService.add(1, 2)).toBe(3);
    });

test("AdditionService to throw when NaN", () => {
    expect(() => additionService.add("a", 2)).toThrow("Error: Not a number");
    });

test("AdditionService add -10 + -20 to equal -30", () => {
    expect(additionService.add(-10, -20)).toBe(-30);
    });
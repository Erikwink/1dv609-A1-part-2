const AdditionService = require("../AdditionService.js");

let additionService;

beforeEach(() => {
  additionService = new AdditionService();
  
  });

test("AdditionService add 1 + 2 to equal 3", () => {
    expect(additionService.add(1, 2)).toBe(3);
    });
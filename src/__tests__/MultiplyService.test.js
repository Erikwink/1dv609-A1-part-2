const MultiplyService = require('../services/MultiplyService');

let multiplyService;

beforeEach(() => {
  multiplyService = new MultiplyService();
});

test("MultiplyService multiply 2 * 3 to equal 6", () => {
    expect(multiplyService.multiply(2, 3)).toBe(6);
    });

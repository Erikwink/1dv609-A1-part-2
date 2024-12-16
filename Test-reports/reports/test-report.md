# Test Report
**Total Tests**: 27
**Passed Tests**: 27
**Failed Tests**: 0
**Skipped Tests**: 0

## Test Suite: src\__tests__\CalculatorController.test.js
| Test | Status | Duration |
|------|--------|----------|
| should call add when operator is '+' | ✔️ Passed | 3ms |

## Test Suite: src\__tests__\ConsoleViewTest.test.js
| Test | Status | Duration |
|------|--------|----------|
| displayResult should log the result to console | ✔️ Passed | 2ms |
| should take user input and perform addition | ✔️ Passed | 2ms |

## Test Suite: src\__tests__\SubtractionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| SubtractionService subtract 1 - 2 to equal -1 | ✔️ Passed | 1ms |
| SubtractionService to throw when NaN | ✔️ Passed | 4ms |
| SubtractionService subtract -10 - -20 to equal 10 | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\DivisionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| DivideService divide 6 / 2 to equal 3 | ✔️ Passed | 1ms |
| DivideService to throw when NaN | ✔️ Passed | 4ms |
| DivideService divide -10 / -2 to equal 5 | ✔️ Passed | 1ms |
| DivideService divide 10 / 0 to equal Error | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\AdditionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| AdditionService add 1 + 2 to equal 3 | ✔️ Passed | 1ms |
| AdditionService to throw when NaN | ✔️ Passed | 4ms |
| AdditionService add -10 + -20 to equal -30 | ✔️ Passed | 1ms |

## Test Suite: src\__tests__\MultiplyService.test.js
| Test | Status | Duration |
|------|--------|----------|
| MultiplyService multiply 2 * 3 to equal 6 | ✔️ Passed | 1ms |
| MultiplyService to throw when NaN | ✔️ Passed | 4ms |
| MultiplyService multiply -10 * -20 to equal 200 | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\Calculator.test.js
| Test | Status | Duration |
|------|--------|----------|
| DivisionServices is called | ✔️ Passed | 2ms |
| DivisionServices returns correct value | ✔️ Passed | N/Ams |
| MultiplyServices is called | ✔️ Passed | N/Ams |
| MultiplyServices returns correct value | ✔️ Passed | 1ms |
| SubtractionServices is called | ✔️ Passed | 1ms |
| SubtractionServices returns correct value | ✔️ Passed | N/Ams |
| AdditionServices is called | ✔️ Passed | N/Ams |
| AdditionServices returns correct value | ✔️ Passed | N/Ams |
| DivisionService throws error for division by zero | ✔️ Passed | 7ms |
| AdditionService throws error for invalid input | ✔️ Passed | N/Ams |
| SubtractionService throws error for invalid input | ✔️ Passed | N/Ams |

## Coverage Summary
| File | % Stmts | % Branch | % Funcs | % Lines |
|------|---------|----------|---------|---------|
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\controller\Controller.js | 58.33% | 0.00% | 100.00% | 58.33% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\model\Calculator.js | 0.00% | 100.00% | 0.00% | 0.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\AdditionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\DivisionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\MultiplyService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\SubtractionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\views\ConsoleView.js | 80.00% | 0.00% | 83.33% | 80.00% |


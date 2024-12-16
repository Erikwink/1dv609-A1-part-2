# Test Report
**Total Tests**: 33
**Passed Tests**: 33
**Failed Tests**: 0
**Skipped Tests**: 0

## Test Suite: src\__tests__\ConsoleViewTest.test.js
| Test | Status | Duration |
|------|--------|----------|
| should display result from controller | ✔️ Passed | 3ms |
| should display error if controller throws | ✔️ Passed | 2ms |
| should close readline when user types exit | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\AdditionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| AdditionService add 1 + 2 to equal 3 | ✔️ Passed | 2ms |
| AdditionService to throw when NaN | ✔️ Passed | 4ms |
| AdditionService add -10 + -20 to equal -30 | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\Calculator.test.js
| Test | Status | Duration |
|------|--------|----------|
| DivisionServices is called | ✔️ Passed | 2ms |
| DivisionServices returns correct value | ✔️ Passed | N/Ams |
| MultiplyServices is called | ✔️ Passed | 1ms |
| MultiplyServices returns correct value | ✔️ Passed | 1ms |
| SubtractionServices is called | ✔️ Passed | 1ms |
| SubtractionServices returns correct value | ✔️ Passed | N/Ams |
| AdditionServices is called | ✔️ Passed | 2ms |
| AdditionServices returns correct value | ✔️ Passed | N/Ams |
| DivisionService throws error for division by zero | ✔️ Passed | 6ms |
| AdditionService throws error for invalid input | ✔️ Passed | N/Ams |
| SubtractionService throws error for invalid input | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\CalculatorController.test.js
| Test | Status | Duration |
|------|--------|----------|
| should call add when operator is '+' | ✔️ Passed | 2ms |
| should call subtract when operator is '-' | ✔️ Passed | 1ms |
| should call multiply when operator is '*' | ✔️ Passed | 1ms |
| should call divide when operator is '/' | ✔️ Passed | N/Ams |
| should throw an error for invalid input | ✔️ Passed | 5ms |
| should throw an error for unsupported operation | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\MultiplyService.test.js
| Test | Status | Duration |
|------|--------|----------|
| MultiplyService multiply 2 * 3 to equal 6 | ✔️ Passed | 2ms |
| MultiplyService to throw when NaN | ✔️ Passed | 4ms |
| MultiplyService multiply -10 * -20 to equal 200 | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\DivisionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| DivideService divide 6 / 2 to equal 3 | ✔️ Passed | 1ms |
| DivideService to throw when NaN | ✔️ Passed | 5ms |
| DivideService divide -10 / -2 to equal 5 | ✔️ Passed | N/Ams |
| DivideService divide 10 / 0 to equal Error | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\SubtractionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| SubtractionService subtract 1 - 2 to equal -1 | ✔️ Passed | 1ms |
| SubtractionService to throw when NaN | ✔️ Passed | 4ms |
| SubtractionService subtract -10 - -20 to equal 10 | ✔️ Passed | N/Ams |

## Coverage Summary
| File | % Stmts | % Branch | % Funcs | % Lines |
|------|---------|----------|---------|---------|
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\controller\CalculatorController.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\model\Calculator.js | 100.00% | 100.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\AdditionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\DivisionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\MultiplyService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\SubtractionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\views\ConsoleView.js | 78.57% | 0.00% | 100.00% | 78.57% |


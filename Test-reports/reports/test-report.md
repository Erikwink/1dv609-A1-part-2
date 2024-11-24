# Test Report
**Total Tests**: 22
**Passed Tests**: 20
**Failed Tests**: 2
**Skipped Tests**: 0

## Test Suite: src\__tests__\Calculator.test.js
| Test | Status | Duration |
|------|--------|----------|
| MultiplyServices is called | ❌ Failed | 3ms |
| MultiplyServices returns correct value | ❌ Failed | 1ms |
| SubtractionServices is called | ✔️ Passed | 1ms |
| SubtractionServices returns correct value | ✔️ Passed | 1ms |
| AdditionServices is called | ✔️ Passed | 1ms |
| AdditionServices returns correct value | ✔️ Passed | N/Ams |
| adds 1 + 2 to equal 3 | ✔️ Passed | 1ms |
| subtracts 2 - 1 to equal 1 | ✔️ Passed | 1ms |
| subtracts 200 - 50 to equal 150 | ✔️ Passed | N/Ams |
| multiplies 2 * 2 to equal 4 | ✔️ Passed | N/Ams |
| divides 4 / 2 to equal 2 | ✔️ Passed | 1ms |
| divides 10 / 0 to equal Error | ✔️ Passed | 1ms |
| divides 0 / 1 to equal Error | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\MultiplyService.test.js
| Test | Status | Duration |
|------|--------|----------|
| MultiplyService multiply 2 * 3 to equal 6 | ✔️ Passed | 1ms |
| MultiplyService to throw when NaN | ✔️ Passed | 4ms |
| MultiplyService multiply -10 * -20 to equal 200 | ✔️ Passed | 1ms |

## Test Suite: src\__tests__\SubtractionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| SubtractionService subtract 1 - 2 to equal -1 | ✔️ Passed | 1ms |
| SubtractionService to throw when NaN | ✔️ Passed | 4ms |
| SubtractionService subtract -10 - -20 to equal 10 | ✔️ Passed | N/Ams |

## Test Suite: src\__tests__\AdditionService.test.js
| Test | Status | Duration |
|------|--------|----------|
| AdditionService add 1 + 2 to equal 3 | ✔️ Passed | 2ms |
| AdditionService to throw when NaN | ✔️ Passed | 7ms |
| AdditionService add -10 + -20 to equal -30 | ✔️ Passed | 1ms |

## Coverage Summary
| File | % Stmts | % Branch | % Funcs | % Lines |
|------|---------|----------|---------|---------|
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\AdditionService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\MultiplyService.js | 100.00% | 0.00% | 100.00% | 100.00% |
| C:\Users\erikw\courses\1dv609\1dv609-A1-part-2\src\services\SubtractionService.js | 100.00% | 0.00% | 100.00% | 100.00% |


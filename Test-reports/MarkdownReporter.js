import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MarkdownReporter {
  onRunComplete(_, results) {
    const reportLines = [];

    // Markdown header
    reportLines.push('# Test Report\n');
    reportLines.push(`**Total Tests**: ${results.numTotalTests}\n`);
    reportLines.push(`**Passed Tests**: ${results.numPassedTests}\n`);
    reportLines.push(`**Failed Tests**: ${results.numFailedTests}\n`);
    reportLines.push(`**Skipped Tests**: ${results.numPendingTests}\n`);
    reportLines.push('\n');

    const rootDirectory = process.cwd();

    results.testResults.forEach(suite => {
      const relativePath = path.relative(rootDirectory, suite.testFilePath);

      // Add a table header for the test suite
      reportLines.push(`## Test Suite: ${relativePath}\n`);
      reportLines.push('| Test | Status | Duration |\n');
      reportLines.push('|------|--------|----------|\n');

      // Add rows for each test case in the suite
      suite.testResults.forEach(test => {
        const status = test.status === 'passed' ? '✔️ Passed' : '❌ Failed';
        const duration = `${test.duration || 'N/A'}ms`;
        reportLines.push(`| ${test.title} | ${status} | ${duration} |\n`);
      });

      // Add a blank line between tables
      reportLines.push('\n');
    });

    // Add coverage summary
    const coverageFinalPath = path.join(rootDirectory, 'coverage', 'coverage-final.json');
    if (fs.existsSync(coverageFinalPath)) {
      const coverageFinal = JSON.parse(fs.readFileSync(coverageFinalPath, 'utf8'));
      reportLines.push('## Coverage Summary\n');
      reportLines.push('| File | % Stmts | % Branch | % Funcs | % Lines |\n');
      reportLines.push('|------|---------|----------|---------|---------|\n');

      for (const [file, summary] of Object.entries(coverageFinal)) {
        const statements = summary.s ? (Object.values(summary.s).filter(v => v > 0).length / Object.keys(summary.s).length) * 100 : 0;
        const branches = summary.b ? (Object.keys(summary.b).length > 0 ? (Object.values(summary.b).filter(v => v > 0).length / Object.keys(summary.b).length) * 100 : 100) : 100;
        const functions = summary.f ? (Object.values(summary.f).filter(v => v > 0).length / Object.keys(summary.f).length) * 100 : 0;
        const lines = summary.s ? (Object.values(summary.s).filter(v => v > 0).length / Object.keys(summary.s).length) * 100 : 0;
        reportLines.push(`| ${file} | ${statements.toFixed(2)}% | ${branches.toFixed(2)}% | ${functions.toFixed(2)}% | ${lines.toFixed(2)}% |\n`);
      }

      reportLines.push('\n');
    }

    // Write the Markdown report to the directory
    const report = reportLines.join('');
    const reportDirectory = path.join(__dirname, 'reports');

    // Ensure the directory exists
    if (!fs.existsSync(reportDirectory)) {
      fs.mkdirSync(reportDirectory);
    }

    // Write the report file
    fs.writeFileSync(path.join(reportDirectory, 'test-report.md'), report);
  }
}

export default MarkdownReporter;
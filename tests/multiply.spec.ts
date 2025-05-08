import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

const multiplicationCases = [
  {
    expression: ['6', '×', '2', '='],
    expectedResult: '12',
    expectedDisplay: '6 × 2 =',
  },
  {
    expression: ['1', '2', '×', '3', '='],
    expectedResult: '36',
    // expectedDisplay: '12 × 3 =',
  },
  {
    expression: ['9', '9', '×', '9', '9', '='],
    expectedResult: '9801',
    // expectedDisplay: '99 × 99 =',
  },
  {
    expression: ['7', '×', '0', '='],
    expectedResult: '0',
    expectedDisplay: '7 × 0 =',
  },
  {
    expression: ['2', '×', '3', '×', '4', '='],
    expectedResult: '24',
    // expectedDisplay: '6 × 4 =',
  },
];

test.describe('Multiplication Functionality', () => {
  for (const { expression, expectedResult, expectedDisplay } of multiplicationCases) {
    test(`evaluates ${expression.join(' ')} = ${expectedResult}`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.goto();

      await calc.performCalculation(expression);

      await expect(page.getByTestId('result')).toHaveText(expectedResult);
      if (expectedDisplay !== undefined) {
        await expect(page.getByTestId('expression')).toHaveText(expectedDisplay);
      }
    });
  }
});

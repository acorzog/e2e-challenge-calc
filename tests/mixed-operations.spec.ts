import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

const mixedCases = [
  {
    expression: ['5', '+', '3', '×', '2', '='],
    expectedResult: '16',
    expectedDisplay: '8 × 2 =',
  },
  {
    expression: ['1', '0', '-', '2', '=',],
    expectedResult: '8',
    //expectedDisplay: '10 - 2 =',
  },
  {
    expression: ['9', '×', '0', '.', '1', '='],
    expectedResult: '0.9',
    //expectedDisplay: '9 × 0.1 =',
  },
];

test.describe('Mixed Operations Functionality', () => {
  for (const { expression, expectedResult, expectedDisplay } of mixedCases) {
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

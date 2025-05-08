import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

const additionCases = [
  {
    expression: ['2', '.', '3', '+', '3', '='],
    expectedResult: '5.3',
    expectedDisplay: '2 + 3 =',
  },
  {
    expression: ['6', '+', '6', '+', '6', '='],
    expectedResult: '18',
    //expectedDisplay: '12 + 6 =',
  },
  {
    expression: ['9', '+', '0', '='],
    expectedResult: '9',
    //expectedDisplay: '9 + 0 =',
  },
];

test.describe('Addition Functionality', () => {
  for (const { expression, expectedResult, expectedDisplay } of additionCases) {
    test(`evaluates ${expression.join(' ')} = ${expectedResult}`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.goto();

      await calc.performCalculation(expression);

      await expect(page.getByTestId('result')).toHaveText(expectedResult);
      if (expectedDisplay) {
        await expect(page.getByTestId('expression')).toHaveText(expectedDisplay);
      }
    });
  }
});

import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

const subtractionCases: {
  expression: string[];
  expectedResult: string;
  expectedDisplay?: string;
}[] = [
  {
    expression: ['9', '-', '4', '='],
    expectedResult: '5',
    expectedDisplay: '9 - 4 =',
  },
  {
    expression: ['2', '5', '-', '1', '7', '='],
    expectedResult: '8',
    expectedDisplay: '25 - 17 =',
  },
  {
    expression: ['3', '-', '9', '='],
    expectedResult: '-6',
  },
  {
    expression: ['1', '0', '-', '3', '-', '2', '='],
    expectedResult: '5',
  },
  {
    expression: ['0', '-', '7', '='],
    expectedResult: '-7',
  },
  {
    expression: ['5', '.', '5', '-', '2', '.', '2', '='],
    expectedResult: '3.3',
    // expectedDisplay: '5.5 - 2.2 =',
  },
  {
    expression: ['1', '-', '0', '=',],
    expectedResult: '1',
    // expectedDisplay: '1 - 0 =',
  },
];

test.describe('Subtraction Functionality', () => {
  for (const { expression, expectedResult, expectedDisplay } of subtractionCases) {
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

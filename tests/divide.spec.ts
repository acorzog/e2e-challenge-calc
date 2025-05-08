import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

const divisionCases: {
  expression: string[];
  expectedResult: string;
  expectedDisplay?: string;
}[] = [
  {
    expression: ['8', '÷', '2', '='],
    expectedResult: '4',
    expectedDisplay: '8 ÷ 2 =',
  },
  {
    expression: ['1', '0', '0', '÷', '2', '5', '='],
    expectedResult: '4',
    //expectedDisplay: '100 ÷ 25 =',
  },
  {
    expression: ['7', '÷', '2', '='],
    expectedResult: '3.5',
    //expectedDisplay: '7 ÷ 2 =',
  },
  {
    expression: ['9', '÷', '0', '='],
    expectedResult: 'Undefined',
    expectedDisplay: '9 ÷ 0 =',
  },
  {
    expression: ['1', '0', '0', '÷', '2', '÷', '5', '='],
    expectedResult: '10',
    //expectedDisplay: '50 ÷ 5 =',
  },
  {
    expression: ['9', '.', '6', '÷', '0', '.', '4', '='],
    expectedResult: '24',
    //expectedDisplay: '9.6 ÷ 0.4 =',
  },
  {
    expression: ['1', '0', '0', '÷', '3', '='],
    expectedResult: '33.333',
    //expectedDisplay: '100 ÷ 3 =',
  },
  {
    expression: ['0', '÷', '9', '='],
    expectedResult: '0',
    //expectedDisplay: '0 ÷ 9 =',
  },
];

test.describe('Division Functionality', () => {
  for (const { expression, expectedResult, expectedDisplay } of divisionCases) {
    test(`evaluates ${expression.join(' ')} = ${expectedResult}`, async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.goto();

      await calc.performCalculation(expression);

      await expect(page.getByTestId('result')).toContainText(expectedResult);

      if (expectedDisplay !== undefined) {
        await expect(page.getByTestId('expression')).toHaveText(expectedDisplay);
      }
    });
  }
});

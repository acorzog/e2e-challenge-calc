import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

test.describe('Percent Functionality (%)', () => {
  test.beforeEach(async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
  });

  test('converts 50 to 0.5', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('5');
    await calc.clickDigit('0');
    await calc.clickFunction('percent');

    await expect(page.getByTestId('result')).toHaveText('0.5');
  });

  test('converts 5 to 0.05', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('5');
    await calc.clickFunction('percent');

    await expect(page.getByTestId('result')).toHaveText('0.05');
  });

  test('applies percent in operation: 200 × 10% = 20', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('2');
    await calc.clickDigit('0');
    await calc.clickDigit('0');
    await calc.clickOperator('×');
    await calc.clickDigit('1');
    await calc.clickDigit('0');
    await calc.clickFunction('percent');
    await calc.clickOperator('=');

    await expect(page.getByTestId('result')).toHaveText('20');
    await expect(page.getByTestId('expression')).toHaveText('200 × 0.1 =');
  });

  test('converts 0 to 0 using percent', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('0');
    await calc.clickFunction('percent');

    await expect(page.getByTestId('result')).toHaveText('0');
  });

  test('applies percent multiple times: 200 → % → % = 0.02', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('2');
    await calc.clickDigit('0');
    await calc.clickDigit('0');
    await calc.clickFunction('percent');
    await calc.clickFunction('percent');

    await expect(page.getByTestId('result')).toHaveText('0.02');
  });
});

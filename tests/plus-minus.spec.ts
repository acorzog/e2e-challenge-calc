import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

test.describe('Plus - Minus Functionality (±)', () => {
  test.beforeEach(async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
  });

  test('toggles a positive number to negative', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('8');
    await calc.clickFunction('plus-minus');

    await expect(page.getByTestId('result')).toHaveText('-8');
  });

  test('toggles a negative number back to positive', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('5');
    await calc.clickFunction('plus-minus');
    await calc.clickFunction('plus-minus');

    await expect(page.getByTestId('result')).toHaveText('5');
  });

  test('toggles 0 remains 0', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('0');
    await calc.clickFunction('plus-minus');

    await expect(page.getByTestId('result')).toHaveText('0');
  });

  test('applies ± before an operation', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('7');
    await calc.clickFunction('plus-minus');
    await calc.clickOperator('+');
    await calc.clickDigit('2');
    await calc.clickOperator('=');

    await expect(page.getByTestId('result')).toHaveText('-5');
    await expect(page.getByTestId('expression')).toHaveText('-7 + 2 =');
  });

  test('applies ± after result', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('4');
    await calc.clickOperator('×');
    await calc.clickDigit('3');
    await calc.clickOperator('=');
    await calc.clickFunction('plus-minus');

    await expect(page.getByTestId('result')).toHaveText('-12');
  });
});

import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../page/page-object';

test.describe('Clear (AC) Functionality', () => {
  test.beforeEach(async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
  });

  test('clears a single number entry', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('9');
    await calc.clickFunction('ac');

    await expect(page.getByTestId('result')).toHaveText('0');
    await expect(page.getByTestId('expression')).toHaveText('');
  });

  test('clears after an operation is started', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('8');
    await calc.clickOperator('+');
    await calc.clickFunction('ac');

    await expect(page.getByTestId('result')).toHaveText('0');
    await expect(page.getByTestId('expression')).toHaveText('');
  });

  test('clears after full expression and result', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('4');
    await calc.clickOperator('×');
    await calc.clickDigit('2');
    await calc.clickOperator('=');
    await calc.clickFunction('ac');

    await expect(page.getByTestId('result')).toHaveText('0');
    await expect(page.getByTestId('expression')).toHaveText('');
  });

  test('clears negative number', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.clickDigit('7');
    await calc.clickFunction('plus-minus');
    await calc.clickFunction('ac');

    await expect(page.getByTestId('result')).toHaveText('0');
    await expect(page.getByTestId('expression')).toHaveText('');
  });
});

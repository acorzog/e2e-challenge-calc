import { Page } from '@playwright/test';

export class CalculatorPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async clickDigit(digit: string) {
    await this.page.getByTestId(`digit-${digit}`).click();
  }

  async clickOperator(op: string) {
    await this.page.getByTestId(`operator-${op}`).click();
  }

  async clickFunction(fn: string) {
    await this.page.getByTestId(`function-${fn}`).click();
  }

  async clickDecimal() {
    await this.page.getByTestId('decimal').click();
  }

  async getResultText() {
    return this.page.getByTestId('result').textContent();
  }

  async getExpressionText() {
    return this.page.getByTestId('expression').textContent();
  }
  
  async performCalculation(steps: string[]) {
    for (const step of steps) {
      if (/\d/.test(step)) {
        for (const digit of step) {
          await this.clickDigit(digit);
        }
      } else if (['+', '-', '×', '÷', '='].includes(step)) {
        await this.clickOperator(step);
      } else if (step === '±' || step === 'percent' || step === 'ac') {
        await this.clickFunction(step);
      } else if (step === '.') {
        await this.clickDecimal();
      } else {
        throw new Error(`Unrecognized step: ${step}`);
      }
    }
  }
  
}

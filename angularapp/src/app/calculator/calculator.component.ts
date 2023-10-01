// calculator.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  displayValue: string = '';
  result: number | null = null;
  memoryValue: number | null = null;
  currentOperator: string | null = null;

  onNumberClick(number: string) {
    this.displayValue += number;
  }

  onOperatorClick(operator: string) {
    if (this.displayValue !== '') {
      this.result = parseFloat(this.displayValue);
      this.displayValue = '';
      this.currentOperator = operator;
    }
  }
  onClearEntryClick() {
    this.displayValue = '';
  }

  onMemoryStoreClick() {
    this.memoryValue = parseFloat(this.displayValue);
  }

  onMemoryRecallClick() {
    if (this.memoryValue !== null) {
      this.displayValue = this.memoryValue.toString();
    }
  }
  onSquareRootClick() {
    const value = parseFloat(this.displayValue);
    this.displayValue = Math.sqrt(value).toString();
  }

  onExponentiationClick() {
    const value = parseFloat(this.displayValue);
    this.displayValue = Math.pow(value, 2).toString();
  }
  onBackspaceClick() {
    if (this.displayValue.length > 0) {
      this.displayValue = this.displayValue.slice(0, -1);
    }
  }

  onPercentageClick() {
    const value = parseFloat(this.displayValue);
    this.displayValue = (value / 100).toString();
  }

  onDecimalPointClick() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  onEqualsClick() {
    if (this.displayValue !== '' && this.currentOperator !== null && this.result !== null) {
      const currentValue = parseFloat(this.displayValue);
      switch (this.currentOperator) {
        case '+':
          this.result += currentValue;
          break;
        case '-':
          this.result -= currentValue;
          break;
        case '*':
          this.result *= currentValue;
          break;
        case '/':
          this.result /= currentValue;
          break;
        default:
          break;
      }
      this.displayValue = this.result.toString();
      this.currentOperator = null;
    }
  }

  onClearClick() {
    this.displayValue = '';
    this.result = null;
    this.currentOperator = null;
  }
}

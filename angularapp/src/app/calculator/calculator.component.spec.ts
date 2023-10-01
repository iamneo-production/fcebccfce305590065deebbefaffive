import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the calculator component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize displayValue as an empty string', () => {
    expect(component.displayValue).toBe('');
  });

  it('should handle number button clicks', () => {
    component.onNumberClick('1');
    expect(component.displayValue).toBe('1');
  });

  it('should handle operator button clicks', () => {
    component.onNumberClick('1');
    component.onOperatorClick('+');
    component.onNumberClick('2');
    component.onEqualsClick();
    expect(component.displayValue).toBe('3');
  });

  it('should handle clear button click', () => {
    component.onNumberClick('1');
    component.onClearClick();
    expect(component.displayValue).toBe('');
  });

  it('should handle decimal point button click', () => {
    component.onNumberClick('1');
    component.onDecimalPointClick();
    component.onNumberClick('2');
    expect(component.displayValue).toBe('1.2');
  });

  it('should handle backspace button click', () => {
    component.onNumberClick('123');
    component.onBackspaceClick();
    expect(component.displayValue).toBe('12');
  });

  it('should handle percentage button click', () => {
    component.onNumberClick('50');
    component.onPercentageClick();
    expect(component.displayValue).toBe('0.5');
  });

  it('should handle memory store and recall button clicks', () => {
    component.onNumberClick('5');
    component.onMemoryStoreClick();
    component.onClearClick();
    component.onMemoryRecallClick();
    expect(component.displayValue).toBe('5');
  });

  it('should handle square root button click', () => {
    component.onNumberClick('9');
    component.onSquareRootClick();
    expect(component.displayValue).toBe('3');
  });

  it('should handle square root button click', () => {
    component.onNumberClick('36');
    component.onSquareRootClick();
    expect(component.displayValue).toBe('6');
  });
});

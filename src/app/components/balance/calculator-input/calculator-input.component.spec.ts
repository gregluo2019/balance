import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalculatorInputComponent } from './calculator-input.component';

describe('CalculatorInputComponent', () => {
  let component: CalculatorInputComponent;
  let fixture: ComponentFixture<CalculatorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [CalculatorInputComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

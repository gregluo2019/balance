import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import { GenericValidator } from 'src/app/shared/validators/generic-validator';
import { NumberValidators } from 'src/app/shared/validators/number.validator';
import { FADE_IN_OUT_Height } from 'src/app/core/eh-animations';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss'],
  animations: [FADE_IN_OUT_Height]
})
export class CalculatorInputComponent implements OnInit {
  id = ''
  event: Event = null
  toggleCarousel = false

  public form: FormGroup;
  displayMessage: { [key: string]: string } = {}
  private validationMessages: { [key: string]: { [key: string]: string } }
  private genericValidator: GenericValidator
  protected unsubscribeAll = new Subject();

  constructor(public appService: AppService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      startBalance: ['300000', [Validators.required, NumberValidators.range(0, 100000000000)]],
      salary: ['100000', [Validators.required, NumberValidators.range(0, 100000000000)]],
      contributionRate: ['9.5', [Validators.required, NumberValidators.range(0, 100)]],
      inflationRate: ['3', [Validators.required, NumberValidators.range(0, 100)]],
      earnings: ['7.5', [Validators.required, NumberValidators.range(0, 100)]],
      fees: ['1.5', [Validators.required, NumberValidators.range(0, 100)]],
      tax: ['15', [Validators.required, NumberValidators.range(0, 100)]],
      withdrawalRate: ['5', [Validators.required, NumberValidators.range(0, 100)]],
      year: ['2020', [Validators.required, NumberValidators.range(2020, 3000)]],
      age: ['45', [Validators.required, NumberValidators.range(18, 150)]],
      withdrawalsBeginAge: ['66', [Validators.required, NumberValidators.range(18, 150)]],
    });

    this.validationMessages = {
      startBalance: { required: "Start Balance is required.", range: "Start Balance should be in the range of 0 and 100000000000" },
      salary: { required: "Salary is required.", range: "Salary should be in the range of 0 and 100000000000" },
      contributionRate: { required: "Contribution Rate is required.", range: "Contribution should be in the range of 0 and 100" },
      inflationRate: { required: "Inflation Rate is required.", range: "Inflation should be in the range of 0 and 100" },
      earnings: { required: "Earnings is required.", range: "Earnings should be in the range of 0 and 100" },
      fees: { required: "Fees is required.", range: "Fees should be in the range of 0 and 100" },
      tax: { required: "Tax is required.", range: "Tax should be in the range of 0 and 100" },
      withdrawalRate: { required: "Withdrawal Rate is required.", range: "Withdrawal should be in the range of 0 and 100" },
      year: { required: "Year is required.", range: "Year should be in the range of 2020 and 3000" },
      age: { required: "Age is required.", range: "Age should be in the range of 18 and 150" },
      withdrawalsBeginAge: { required: "This field is required.", range: "It should be in the range of 18 and 150" },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  calculateBalance() {
    let calculatorParameters = this.form.value
    this.appService.calculateBalances(calculatorParameters)
  }

  validateForm() {
    this.displayMessage = this.genericValidator.processMessages(this.form);
  }
}

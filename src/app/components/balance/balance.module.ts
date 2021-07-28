import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceViewComponent } from './balance-view/balance-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BalanceRoutingModule } from './balance.routing';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { BalanceTableComponent } from './balance-table/balance-table.component';
import { BalanceChartComponent } from './balance-chart/balance-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BalanceViewComponent,
    CalculatorInputComponent,
    BalanceTableComponent,
    BalanceChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BalanceRoutingModule,
    ChartsModule
  ],
  exports: []
})
export class BalanceModule { }

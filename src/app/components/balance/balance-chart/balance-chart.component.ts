import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { Balance } from '../balance.model';
import { FADE_IN_OUT_Height } from 'src/app/core/eh-animations';

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrls: ['./balance-chart.component.scss'],
  animations: [FADE_IN_OUT_Height]
})
export class BalanceChartComponent implements OnInit, OnDestroy {
  protected unsubscribeAll = new Subject()
  balances: Balance[] = null

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Start Balance' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'white',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
    if (this.appService.balances) {
      this.initData()
    }
    this.appService.balances$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(() => {
        this.initData()
      })
  }

  initData() {
    this.balances = this.appService.balances
    this.lineChartData = [
      { data: [], label: 'Start Balance' },
    ];
    this.lineChartLabels.length = 0
    if (!this.balances) return;

    this.balances.forEach((balance: Balance) => {
      this.lineChartData[0].data.push(+balance.startBalance)
      this.lineChartLabels.push(balance.year.toString() as Label)
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.complete();
  }
}

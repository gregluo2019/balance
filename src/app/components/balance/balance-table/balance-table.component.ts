import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { Balance } from '../balance.model';
import { FADE_IN_OUT_Height } from 'src/app/core/eh-animations';

@Component({
  selector: 'app-balance-table',
  templateUrl: './balance-table.component.html',
  styleUrls: ['./balance-table.component.scss'],
  animations: [FADE_IN_OUT_Height]
})
export class BalanceTableComponent implements OnInit, OnDestroy {
  protected unsubscribeAll = new Subject()
  isSmallScreen = false

  balances: Balance[] = null
  displayedColumns = []
  dataSource: MatTableDataSource<Balance>

  constructor(public appService: AppService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("filter") filter: ElementRef;

  ngOnInit() {
    this.isSmallScreen = window.innerWidth < 600
    if (this.isSmallScreen) {
      this.displayedColumns = [
        "age",
        "startBalance",
        "earnings",
      ];
    } else {
      this.displayedColumns = ["year", "age", "startBalance", "contributions", "earnings", "fees", "tax", "withdrawals", "endBalance"];
    }

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
    if (!this.balances) return;
    this.dataSource = new MatTableDataSource(this.balances);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.complete();
  }
}

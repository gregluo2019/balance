import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Balance, CalculatorParameters } from 'src/app/components/balance/balance.model';

@Injectable({ providedIn: 'root' })
export class AppService {
    balances: Balance[] = [];
    balancesSubject = new Subject();
    balances$ = this.balancesSubject.asObservable();

    MAX_AGE = 96
    constructor() { }

    //#region Balances
    calculateBalances(input: CalculatorParameters) {
        let startBalance = +input.startBalance
        let age = +input.age
        let year = +input.year
        let contributions = +input.salary * (+input.contributionRate) / 100
        this.balances.length = 0
        for (age; age < this.MAX_AGE; age++) {
            let earnings = (startBalance + contributions) * (+input.earnings) / 100
            let fees = (startBalance + contributions + earnings) * (+input.fees) / 100
            let tax = (contributions + earnings) * (+input.tax) / 100
            let withdrawals = 0
            if (age >= +input.withdrawalsBeginAge) {
                withdrawals = startBalance * (+input.withdrawalRate) / 100
            }
            let endBalance = startBalance + contributions + earnings - fees - tax - withdrawals

            let balance = new Balance(
                year, age,
                startBalance,
                contributions,
                earnings,
                fees,
                tax,
                withdrawals,
                endBalance
            );
            this.balances.push(balance)

            year++
            startBalance = endBalance

            contributions = contributions * (1 + (+input.inflationRate) / 100)
            if (age >= (+input.withdrawalsBeginAge - 1)) {
                contributions = 0
            }
        }

        this.balancesSubject.next(this.balances)
    }
    //#endregion
}
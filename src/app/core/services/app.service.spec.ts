import { CalculatorParameters } from "src/app/components/balance/balance.model";
import { AppService } from "./app.service";

describe('AppService', () => {
    let service: AppService;
    beforeEach(() => { service = new AppService(); });

    it('Can set a Toy Robot', () => {
        let input = new CalculatorParameters(2020, 45, 300000, 100000, 9.5, 3, 7.5, 1.5, 15, 5, 66)
        service.calculateBalances(input)
        expect(service.balances.length).toBe(51);
        expect(service.balances[1].year).toBe(2021);
        expect(service.balances[1].age).toBe(46);
        expect(service.balances[1].startBalance).toBe(322814.9375);
        expect(service.balances[1].contributions).toBe(9785);
        expect(service.balances[1].earnings).toBe(24944.9953125);
        expect(service.balances[1].fees).toBe(5363.1739921875);
        expect(service.balances[1].tax).toBe(5209.499296875);
        expect(service.balances[1].withdrawals).toBe(0);
        expect(service.balances[1].endBalance).toBe(346972.25952343753);
    });

});
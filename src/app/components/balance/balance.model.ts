export class CalculatorParameters {
    constructor(
        public year: number,
        public age: number,
        public startBalance: number,
        public salary: number,
        public contributionRate: number,
        public inflationRate: number,
        public earnings: number,
        public fees: number,
        public tax: number,
        public withdrawalRate: number,
        public withdrawalsBeginAge: number,
    ) { }
}

export class Balance {
    constructor(
        public year: number,
        public age: number,
        public startBalance: number,
        public contributions: number,
        public earnings: number,
        public fees: number,
        public tax: number,
        public withdrawals: number,
        public endBalance: number,
    ) { }
}
export class Stock {
constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
    ) {}
}

export const stocks: Stock[] = [
    new Stock(1, 'first stock', 1.99, 3.5, 'This is the first stock', ['IT', 'Internet']),
    new Stock(2, 'second stock', 2.99, 3.5, 'This is the second stock', ['Finance']),
    new Stock(3, 'third stock', 3.99, 2.5, 'This is the third stock', ['IT']),
    new Stock(4, 'fourth stock', 4.99, 4.5, 'This is the forth stock', ['Internet']),
    new Stock(5, 'fifth stock', 5.99, 5.0, 'This is the fifth stock', ['Finance']),
    new Stock(6, 'sixth stock', 6.99, 2.2, 'This is the sixth stock', ['IT', 'Finance']),
    new Stock(7, 'seventh stock', 7.99, 1.5, 'This is the seveth stock', ['IT', 'Game']),
    new Stock(8, 'eighth stock', 8.99, 4.4, 'This is the eigth stock', ['Network']),
];

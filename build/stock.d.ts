import { IStock } from './stockInterface';
export declare class Stock implements IStock {
    id: number;
    name: string;
    price: number;
    rating: number;
    desc: string;
    categories: Array<string>;
    constructor(id: number, name: string, price: number, rating: number, desc: string, categories: Array<string>);
}
export declare const stocks: Stock[];

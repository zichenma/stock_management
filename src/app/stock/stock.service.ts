import { Injectable } from '@angular/core';
import { Stock } from './stock';
// import { stocks } from './stock'; for demo static data
// for v4
 import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class StockService {


  private baseUrl = 'api/stock';

  constructor(
    private http: HttpClient
  ) { }

  // for v4:
  // constructor(
  //   private http: Http
  // ) { }

  // for demo data:
  // getStocks(): Stock[] {
  //   return this.stocks;
  // }

  // for v4:

  // getStocks(): Observable<Array<Stock>> {
  //   return this.http.get(this.baseUrl).map(res => res.json());
  // }

  getStocks(): Observable<Array<Stock>> {
     return this.http.get<Array<Stock>>(this.baseUrl);
  }
  // for demo data:
  // getStock(id: number): Stock {
  //   let stock = this.stocks.find(st => st.id === id);
  //   if (!stock) {
  //     stock = new Stock(0, '', 0, 0, '', []);
  //   }
  //   return stock;
  // }

  // for V4:
  // getStock(id: number): Observable<Stock> {
  //   return this.http.get(`${this.baseUrl}/${id}`).map(
  //     res => res.json();
  // );
  getStock(id: number): Observable<Stock> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Stock>(url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }

  getChartData() {
    return this.http.get<any>('http://localhost:8080/employees/hours-worked-for-week');
  }
}
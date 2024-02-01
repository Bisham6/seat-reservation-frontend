import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsServicesService {

  private apiUrl = 'http://localhost:3000';

  constructor( private http: HttpClient) { }
  
  getSeats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/seats`);
  }
  
  getAvailableSeats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/available_Seats`);
  }

  bookAvailableSeat(numberOfSeats:string): Observable<any> {
    const reservationData = { numberOfSeats }
    console.log("i am in service",reservationData)
    return this.http.post(`${this.apiUrl}/reserve-seats`,reservationData);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://api.tkdost.com/tkd2/api/'
  constructor(
    private http: HttpClient
  ) { }


  GetInTouch(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'HelpAndSupportTicket', data)
  }
}

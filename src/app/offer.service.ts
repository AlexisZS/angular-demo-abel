import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'https://backend-production-bb3e.up.railway.app/discount/';

  constructor(private http: HttpClient) { }

  getOffer(id: string): Observable<any> {
    const url = this.apiUrl + id;
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';

// Angular HTTPClient is used to send HTTP requests
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}

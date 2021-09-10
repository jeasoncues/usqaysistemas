import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders
  urlServer = environment.serverUrl

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
  }

  GET(url: string) {
    return this.http.get(this.urlServer + url, { headers: this.headers })
  }

  POST(url: string, data: any) {
    return this.http.post(this.urlServer + url, data, { headers: this.headers })
  }
}

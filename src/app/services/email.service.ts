import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = ''

  private headers

  constructor(
    private http: HttpClient
  ) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    this.url = environment.serverUrl + 'send_email_contacto'
  }

  sendEmail(data: any) {
    return this.http.post(this.url, data)
  }
}

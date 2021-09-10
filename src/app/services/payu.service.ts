import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayuService {

  // private url = '/server/obtener_data_venta.php'
  private url = ''

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.serverUrl + 'get_data_venta'
  }

  obtenerData(data: any) {
    return this.http.post(this.url, data)
  }

}
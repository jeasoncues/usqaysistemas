import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
@Component({
  selector: 'app-registro-campania',
  templateUrl:'./registro-campania.component.html',
  styleUrls: ['./registro-campania.component.scss']
})
export class RegistroCampaniaComponent implements OnInit {
  users: Cliente;
  

  

  constructor() { 

    this.users = new Cliente();

  }

  ngOnInit(): void {

  }

  guardarCliente(): void {
    // console.log(this.users.bussiness_id);
    if(this.users.nombres){
      alert('Debes completar todos los campos');
       return;
     }

    }


}

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-form-datos-cart',
  templateUrl: './form-datos-cart.component.html',
  styleUrls: ['./form-datos-cart.component.scss']
})
export class FormDatosCartComponent implements OnInit {

  form: FormGroup
  ciudades = []

  constructor(
    public dialogo: MatDialogRef<FormDatosCartComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private api: ApiService,
    private cart: CartService
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this.loadCiudades()
  }

  loadCiudades() {
    this.api.GET('ciudad/get').subscribe((res: any) => {
      this.ciudades = res.data
      let data_ = this.cart.getDatos()
      this.form.reset({
        email: data_.email,
        ciudad_id: data_.ciudad_id
      })
    })
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, [
        Validators.required,
      ]),
      ciudad_id: this.formBuilder.control(null, [
        Validators.required,
      ]),
    })
  }

  onSubmit() {

    let ciudad = this.ciudades.find(i => i.id == this.form.value.ciudad_id)

    this.cart.saveDatos({
      email: this.form.value.email,
      ciudad_id: ciudad.id,
      ciudad_nombre: ciudad.nombre
    })
    this.dialogo.close()
  }

}

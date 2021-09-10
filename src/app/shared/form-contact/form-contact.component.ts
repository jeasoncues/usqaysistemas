import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  form: FormGroup
  loading: boolean = false

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private emailService: EmailService,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      nombres: this.formBuilder.control(null, [
        Validators.required,
      ]),
      apellidos: this.formBuilder.control(null, [
        Validators.required,
      ]),
      email: this.formBuilder.control(null, [
        Validators.required,
      ]),
      telefono: this.formBuilder.control(null, [
        Validators.required,
      ]),
      servicios: this.formBuilder.control(null, [
        Validators.required,
      ]),
      mensaje: this.formBuilder.control(null, [
        Validators.required,
      ]),
    })
  }

  onSendEmail() {
    if (!this.form.valid) return

    this.loading = true

    this.emailService.sendEmail(this.form.value).subscribe(res => {
      this.loading = false

      this.snack.open('Enviado, Uno de nuestros asesores se comunicará con usted.', 'Aceptar', { duration: 3000 })

      this.form.reset()
    })

    this.buildForm()

  }

}

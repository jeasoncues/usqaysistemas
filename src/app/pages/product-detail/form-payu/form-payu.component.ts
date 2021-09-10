import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-payu',
  templateUrl: './form-payu.component.html',
  styleUrls: ['./form-payu.component.scss']
})
export class FormPayuComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('fp', this.data)

  }

  aun() {

    this.dialog.closeAll()
    this.router.navigate(['contacto'])
  }

}

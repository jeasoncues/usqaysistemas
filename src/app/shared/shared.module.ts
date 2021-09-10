import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';
import { RouterModule } from '@angular/router';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, FormContactComponent, DialogConfirmComponent],
  exports: [NavbarComponent, FooterComponent, FormContactComponent, DialogConfirmComponent],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

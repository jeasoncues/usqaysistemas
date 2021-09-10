import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { IconsModule } from 'src/app/shared/icons.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDatosCartComponent } from './form-datos-cart/form-datos-cart.component';


@NgModule({
  declarations: [CartComponent, CatalogoComponent, FormDatosCartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    MaterialModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { IconsModule } from 'src/app/shared/icons.module';
import { FormPayuComponent } from './form-payu/form-payu.component';


@NgModule({
  declarations: [ProductDetailComponent, FormPayuComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule,
    MaterialModule,
    IconsModule,
  ]
})
export class ProductDetailModule { }

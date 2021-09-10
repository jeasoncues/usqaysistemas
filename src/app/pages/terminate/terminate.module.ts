import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminateRoutingModule } from './terminate-routing.module';
import { TerminateComponent } from './terminate.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { IconsModule } from 'src/app/shared/icons.module';


@NgModule({
  declarations: [TerminateComponent],
  imports: [
    CommonModule,
    TerminateRoutingModule,
    SharedModule,
    MaterialModule,
    IconsModule,
  ]
})
export class TerminateModule { }

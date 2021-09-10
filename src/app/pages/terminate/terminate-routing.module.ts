import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminateComponent } from './terminate.component';


const routes: Routes = [
  {
    path: '',
    component: TerminateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminateRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegistroCamapaniaComponent } from './registro-camapania/registro-camapania.component';
import { RegistroCampaniaComponent } from './registro-campania/registro-campania.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'registro', component: RegistroCampaniaComponent }, 
];


@NgModule({
  declarations: [
    AppComponent,
    RegistroCamapaniaComponent,
    RegistroCampaniaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

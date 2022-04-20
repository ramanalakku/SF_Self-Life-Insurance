import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SummarypageComponent } from './summarypage/summarypage.component';
import { NgxSpinnerModule } from "ngx-spinner";  
//import {  BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoComponent,
    SummarypageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule,
    // RouterModule.forRoot([
    //   {path: 'home', component: HomeComponent},
    //   {path: 'personalinfo', component: PersonalInfoComponent},
    // ]),
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

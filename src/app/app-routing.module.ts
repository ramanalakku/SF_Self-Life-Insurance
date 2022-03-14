import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SummarypageComponent } from './summarypage/summarypage.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
{ path: 'personalinfo', component:PersonalInfoComponent },
{ path: 'summarypage', component:SummarypageComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

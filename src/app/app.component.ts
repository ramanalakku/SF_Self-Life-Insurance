import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {homepage} from './home/home.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Self_insurance';
   constructor(
    //private homepage:homepage,
    private router:Router
    ){}
  
  submit(){debugger
//this.router.navigate(['/homepage']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persnalinfo: boolean = false;
  nextpage:boolean=false;
  alertshow:boolean=false;
 
  submitted = false;
  myData: any;
  Selectedbiodata:any;
  constructor(
    private router:Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

  }
  
  gotopersonalinfo(){debugger
    //  this.persnalinfo=true;
   this.router.navigate(['/personalinfo']);
   
    }
    
   
   
 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {countries} from '../shared/countrys-data-store';
import { personaldataobj,Config,Info } from '../shared/shared.model';
import { GlobalService } from '../global.service';
//import { NotificationService } from './../shared/notification.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persnalinfo: boolean = false;
  nextpage:boolean=false;
  detailspage:boolean=false;
  public countries:any = countries;
  phonenumbervalue:any='';
  public Selectedbiodata:any = personaldataobj;
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    countrycode: new FormControl(''),
    mobileNumber: new FormControl(''),
    birthday: new FormControl(''),
    Height: new FormControl(''),
    Weight: new FormControl(''),
    radio_gender: new FormControl(''),
    healthcategory: new FormControl(''),
    coverageplan: new FormControl(''),
    coverageterm: new FormControl(''),
  });
  submitted = false;
  myData: any;
  getdeatisldata:any;

  constructor(
    private router:Router,
    private http: HttpClient,
    private formBuilder:FormBuilder,
    private globalService:GlobalService
    ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
        lastname: ['', [Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
        countrycode: [null, [Validators.required]],
        mobileNumber: [null, [Validators.required,Validators.pattern("[0-9]{10}")]],
        birthday:['',[Validators.required]],
        Height:['',[Validators.required]],
        Weight:['',[Validators.required]],
        radio_gender:['',[Validators.required]],
        healthcategory:['',[Validators.required]],
        coverageplan:['',[Validators.required]],
        coverageterm:['',[Validators.required]],
      }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  gotoHome(){debugger
     this.persnalinfo=true;
   this.router.navigate(['/personalinfo']);
    }
    onSubmit(): void {debugger
      this.submitted = true;
      if (this.form.invalid) {
        this.nextpage=false;
        return;
      }else{
      debugger
        this.persnalinfo=false;
        this.nextpage=true;
        this.Selectedbiodata=this.form.value;
        this.globalService.setFormdata(this.Selectedbiodata);
        //this.notificationService.success('Your Details added Successfully!');
      }
      console.log(JSON.stringify(this.form.value, null, 2));
    }
    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }
    numbersOnlyValidator(event:any):void{
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }
  preview(){debugger
    this.persnalinfo=true;
    this.nextpage=false;
    this.form.value;
  }
  saveDetails(){debugger

    this.globalService.saveDetails(this.Selectedbiodata)
    .subscribe((responce:Info) => {
        if(responce){
          alert("Your Details added Successfully!");
          this.persnalinfo=false;
          this.nextpage=false;
        }
      },(error: HttpErrorResponse) => {
       
      }
    );
}
getDetails(phonenumbervalue:string){debugger
  this.globalService.getDetails(phonenumbervalue)
        .subscribe (data => {
          if(data){
            this.getdeatisldata=data;
            this.detailspage=true;
             this.nextpage=false;
             this.persnalinfo=false;
          }else{
            alert("No Data Found!");
          }
      });
}
home(){
  this.detailspage=false;
  this.persnalinfo=false;
  this.nextpage=false;
}
  
  gotopersonalinfo(){debugger
    
    this.router.navigate(['/personalinfo']);
   
    }
   
   
 
}

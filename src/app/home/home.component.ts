import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {countries} from '../shared/countrys-data-store';
import { personaldataobj,Config,Info } from '../shared/shared.model';
import { GlobalService } from '../global.service';
//import { NotificationService } from './../shared/notification.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner"; 
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persnalinfo: boolean = false;
  nextpage:boolean=false;
  detailspage:boolean=false;
  finalpage:boolean=false;
  finaldetailspage:boolean=false;
  insurencefinalprice:any;
  public countries:any = countries;
 // phonenumbervalue:any;
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
    private globalService:GlobalService,
    private SpinnerService: NgxSpinnerService
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
     //this.phonenumbervalue="";
   this.router.navigate(['/personalinfo']);
    }
    onSubmit(): void {debugger
      this.submitted = true;
      //this.phonenumbervalue="";
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
      //this.phonenumbervalue="";
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
  Continue(){
  debugger
    this.finaldetailspage=true;
    this.nextpage=false;
    if(this.Selectedbiodata.coverageplan=='$100000' && this.Selectedbiodata.coverageterm=='10 years' ){
      this.insurencefinalprice="$17.74";
    }else if(this.Selectedbiodata.coverageplan=='$100000' && this.Selectedbiodata.coverageterm=='20 years' ){
      this.insurencefinalprice="$19.45";
    }else if(this.Selectedbiodata.coverageplan=='$100000' && this.Selectedbiodata.coverageterm=='30 years' ){
      this.insurencefinalprice="$24.45";
    }else if(this.Selectedbiodata.coverageplan=='$250000' && this.Selectedbiodata.coverageterm=='10 years' ){
      this.insurencefinalprice="$25.89";
    }else if(this.Selectedbiodata.coverageplan=='$250000' && this.Selectedbiodata.coverageterm=='20 years' ){
      this.insurencefinalprice="$30.09";
    }else if(this.Selectedbiodata.coverageplan=='$250000' && this.Selectedbiodata.coverageterm=='30 years' ){
      this.insurencefinalprice="$42.84";
    }else if(this.Selectedbiodata.coverageplan=='$500000' && this.Selectedbiodata.coverageterm=='10 years' ){
      this.insurencefinalprice="$37.39";
    }else if(this.Selectedbiodata.coverageplan=='$500000' && this.Selectedbiodata.coverageterm=='20 years' ){
      this.insurencefinalprice="$49.14";
    }else if(this.Selectedbiodata.coverageplan=='$500000' && this.Selectedbiodata.coverageterm=='30 years' ){
      this.insurencefinalprice="$74.39";
    }

  }
  saveDetails(){debugger
    //this.phonenumbervalue="";
    this.SpinnerService.show();
    this.globalService.saveDetails(this.Selectedbiodata)
    .subscribe((responce:Info) => {
        if(responce){
          // alert("Your Details added Successfully and State Farm agent will followup with you.");
          this.finalpage=true;
          this.finaldetailspage=false;
           this.persnalinfo=false;
          // this.nextpage=false;
          this.SpinnerService.hide();
        }
      },(error: HttpErrorResponse) => {
       
      }
    );
}
changeQuote(){
  this.persnalinfo=true;
  this.detailspage=false;
  this.finaldetailspage=false;
  this.nextpage=false;
  this.finalpage=false;
}
getDetails(phonenumbervalue:string){debugger
   this.SpinnerService.show();
   this.getdeatisldata="";
  this.globalService.getDetails(phonenumbervalue)
        .subscribe (data => {
          if(data){
            this.getdeatisldata=data;
            this.detailspage=true;
             this.nextpage=false;
             this.persnalinfo=false;
             this.finaldetailspage=false;
             this.SpinnerService.hide();
             phonenumbervalue="";
          }else{
            alert("No Data Found!");
          }
      });
}
home(){
  //this.phonenumbervalue="";
  this.detailspage=false;
  this.persnalinfo=false;
  this.nextpage=false;
  this.finalpage=false;
  this.finaldetailspage=false;
}
  
  gotopersonalinfo(){debugger
    
    this.router.navigate(['/personalinfo']);
   
    }
   
   
 
}

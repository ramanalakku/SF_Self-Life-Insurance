import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {countries} from '../shared/countrys-data-store';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./home/home.component.css']
})
export class PersonalInfoComponent implements OnInit {
  persnalinfo: boolean = false;
  nextpage:boolean=false;
  alertshow:boolean=false;
  submitted = false;
  myData: any;
  Selectedbiodata:any;
  public countries:any = countries;
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
  constructor( private formBuilder:FormBuilder,private golbalservice:GlobalService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")],
        lastname: ['', Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")],
        countrycode: [null, Validators.required],
        mobileNumber: [null, [Validators.required,Validators.pattern("[0-9]{10}")]],
        birthday:['',Validators.required],
        Height:['',Validators.required],
        Weight:['',Validators.required],
        radio_gender:['',Validators.required],
        healthcategory:['',Validators.required],
        coverageplan:['',Validators.required],
        coverageterm:['',Validators.required],
      }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  onSubmit(): void {debugger
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }else{
      this.Selectedbiodata=this.form.value;
      this.golbalservice.setFormdata( this.Selectedbiodata);
      
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  numbersOnlyValidator(event:any):void{
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }
 
 
}

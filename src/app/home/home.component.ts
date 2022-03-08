import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persnalinfo: boolean = false;
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
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
  constructor(
    private router:Router,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    console.log("Enter home page");
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        mobileNumber: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
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
  gotoHome(){debugger
     this.persnalinfo=true;
   this.router.navigate(['/personalinfo']);
    }
    onSubmit(): void {debugger
      this.submitted = true;
      if (this.form.invalid) {
        return;
      }
      console.log(JSON.stringify(this.form.value, null, 2));
    }
    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }
}

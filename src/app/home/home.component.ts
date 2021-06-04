import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required,Validators.minLength( 5)]),
    confirmPassword:new FormControl(null,
      [Validators.required,Validators.minLength(5), this.checkPassword.bind(this)]),
    country: new FormControl(null, Validators.required),
    gender: new FormControl(null,Validators.required)

  });


  constructor() { }

  ngOnInit(): void {

  }

  checkPassword(control: AbstractControl): ValidationErrors {
    if (this.form && control.value !== this.form.controls['password']?.value) {
      return {checkPassword: true};
    }
    return {};
  }

  submit() {
    console.log(this.form)
  }

}

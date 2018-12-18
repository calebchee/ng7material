import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  checked = false;
  indeterminate = false;
  coverTypeDefault = 'Individual';
  constructor() { }

  adultAgeFormControl = new FormControl('', [
    Validators.required,
  ]);
  dependantAgeFormControl = new FormControl('', [
    Validators.required,
  ]);


}

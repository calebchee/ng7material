import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Section {
  icon: string;
  name: string;
  desp: string;
  premium: string;
}
@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})

export class AddonsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  addons: Section[] = [
    {
      icon: 'accessible',
      name: 'Cover for Skiing or Snowboarding',
      desp: 'You must select this Pack if you are Skiiing, Snowboarding or doing other Winter Sports.',
      premium: '+ 15.50',
    },
    {
      icon: 'golf_course',
      name: 'Golf Pack',
      desp: 'Additional cover if your golf equipment is lost, stolen or damaged; where you become injured',
      premium: '+ 15.50',
    },
    {
      icon: 'local_car_wash',
      name: 'Driving Holiday Pack',
      desp: 'You must select this Pack if you are Skiiing, Snowboarding or doing other Winter Sports.',
      premium: '+ 15.50',
    }
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-destination-select',
  templateUrl: './destination-select.component.html',
  styleUrls: ['./destination-select.component.css']
})
export class DestinationSelectComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  countryCtrl = new FormControl();
  filteredCountries: Observable<string[]>;
  countries: string[] = ['Malaysia'];
  allCountries: string[] = ['Malaysia', 'Singapore', 'Australia', 'Taiwan', 'United States'];

  @ViewChild('countryInput') countryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredCountries = this.countryCtrl.valueChanges.pipe(
      startWith(null),
      map((country: string | null) => country ? this._filter(country) : this.allCountries.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add country only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our country
      if ((value || '').trim()) {
        this.countries.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.countryCtrl.setValue(null);
    }
  }

  remove(country: string): void {
    const index = this.countries.indexOf(country);

    if (index >= 0) {
      this.countries.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.countries.push(event.option.viewValue);
    this.countryInput.nativeElement.value = '';
    this.countryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCountries.filter(country => country.toLowerCase().indexOf(filterValue) === 0);
  }
}

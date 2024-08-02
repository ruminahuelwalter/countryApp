import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from 'app/countries/interfaces/country.interface';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './country-table.component.html',
  styles: `img{
    width: 25px;
  }`
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];

}

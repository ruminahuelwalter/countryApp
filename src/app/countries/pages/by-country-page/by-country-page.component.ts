import { Component } from '@angular/core';
import { Country } from 'app/countries/interfaces/country';
import { CountriesService } from 'app/countries/services/countries.service';
import { SharedModule } from "../../../shared/shared.module";
import { CountryTableComponent } from 'app/countries/components/country-table/country-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule, 
    CountryTableComponent,
    ],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = []
  public isLoading: boolean = false;
  constructor( private countriesService: CountriesService ){}
 
  searchByCountry( term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry( term ).
    subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  }
}

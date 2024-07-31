import { Component } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { CountriesService } from 'app/countries/services/countries.service';
import { Country } from 'app/countries/interfaces/country';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [
    CommonModule,
    CountryTableComponent,
    SharedModule,
  ],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = []
  public isLoading: boolean = false;
  constructor( private countriesService: CountriesService ){}
 
  searchByRegion( term: string): void {
    this.isLoading = true
    this.countriesService.searchRegion( term ).
    subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  }
}

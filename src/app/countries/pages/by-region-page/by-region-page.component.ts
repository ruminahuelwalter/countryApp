import { Component } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { CountriesService } from 'app/countries/services/countries.service';
import { Country } from 'app/countries/interfaces/country';
import { CountryTableComponent } from "../../components/country-table/country-table.component";


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SharedModule, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = []
  constructor( private countriesService: CountriesService ){}
 
  searchByRegion( term: string): void {
    this.countriesService.searchRegion( term ).
    subscribe(
      countries => {this.countries = countries}
    );
  }
}

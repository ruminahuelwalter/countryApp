import { Component } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from 'app/countries/interfaces/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public countries: Country[] = []
  constructor( private countriesService: CountriesService ){}
 
  searchByCapital( term: string): void {
    this.countriesService.searchCapital( term ).
    subscribe(
      countries => {this.countries = countries}
    );
  }

}

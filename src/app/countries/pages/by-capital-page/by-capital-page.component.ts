import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from 'app/countries/interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    CommonModule,
    CountryTableComponent,
    SharedModule
],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }
 
  searchByCapital( term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital( term ).
    subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";
import { CountriesService } from 'app/countries/services/countries.service';
import { Country } from 'app/countries/interfaces/country.interface';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CommonModule } from '@angular/common';
import { Region } from 'app/countries/interfaces/region.type';


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
export class ByRegionPageComponent implements OnInit {
  public regions: Region[] = ['Africa', 'Americas','Asia','Europe','Oceania'];
  public countries: Country[] = [];
  public selectedRegion?: Region; 

  public isLoading: boolean = false;
  constructor( private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region): void {

    this.selectedRegion = region;
    this.isLoading = true
    this.countriesService.searchRegion( region ).
    subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    );
  }
}

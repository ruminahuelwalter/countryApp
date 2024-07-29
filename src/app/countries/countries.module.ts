import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
    CountryTableComponent
  ],
  exports: [
    CountriesRoutingModule,
    SharedModule,
    CountryTableComponent
  ]
})
export class CountriesModule { }

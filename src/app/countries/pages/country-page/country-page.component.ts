import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from 'app/countries/interfaces/country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService:CountriesService,
  ){}

  public country?: Country;


  ngOnInit(): void {
    this.activatedRoute.params.
    pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
    )
    .subscribe( ( country ) => {
      if (!country) {
        return this.router.navigateByUrl('')
      }
      return this.country = country
       
     })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService:CountriesService,
  ){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => {
      console.log({ params: id })

      this.countriesService.searchCountryByAlphaCode( id )
      .subscribe( country => {
        console.log({ country})
      })
    } )
  }


}

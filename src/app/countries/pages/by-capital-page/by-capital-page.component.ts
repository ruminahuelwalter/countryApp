import { Component } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [
    SharedModule],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService ){}
 
  searchByCapital( term: string): void {
    this.countriesService.searchCapital( term );
  }

}

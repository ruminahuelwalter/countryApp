import { Component } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public placeholder: string = 'Por capital';
}

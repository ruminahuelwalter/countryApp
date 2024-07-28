import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent  {
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>();
  
  emitValue( value: string): void {
    this.onValue.emit( value )
  } 
}

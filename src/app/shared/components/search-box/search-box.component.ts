import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(260)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }
  
  private debouncer: Subject<string> = new Subject<string>();
  
  @Input()
  public placeholder: string = '';
  
  @Output()
  public onValue = new EventEmitter<string>();
  
  @Output()
  public onDebounce = new EventEmitter<string>();
  
  emitValue( value: string): void {
    this.onValue.emit( value )
  } 

  onKeyPress( searchTerm: string) {
    this.debouncer.next( searchTerm );
  }
}

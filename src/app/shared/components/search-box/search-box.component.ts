import { Component, ElementRef, EventEmitter, input, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription;
  
  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.pipe(
      debounceTime(260)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }
  
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
    console.log('destruido')
  }
  
  
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
  
  @Input()
  public initialValue: string = '';
}

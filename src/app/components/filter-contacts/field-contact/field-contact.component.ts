import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-feild-contact',
  templateUrl: './field-contact.component.html',
  styleUrls: ['./field-contact.component.scss']
})
export class FieldContactComponent implements OnInit {
  @Output() searchTextEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public keyPress($event: KeyboardEvent): void {
    /*if ($event.key === 'Enter') {*/
    const value: string = ($event.target as HTMLInputElement).value;
    this.newSearchTextEvent(value);

    /*}*/
  }

  public keyPressLetter($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      const value: string = ($event.target as HTMLInputElement).value;
      this.newSearchTextEvent(value);
    }
  }

  public newSearchTextEvent(value: string): void {
    this.searchTextEvent.emit(value);
  }
}

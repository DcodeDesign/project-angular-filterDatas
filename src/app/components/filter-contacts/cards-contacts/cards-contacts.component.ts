import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IContact} from '../IContact';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cards-contacts',
  templateUrl: './cards-contacts.component.html',
  styleUrls: ['./cards-contacts.component.scss']
})
export class CardsContactsComponent implements OnInit, OnChanges {
  @Input() contacts: IContact[];
  @Input() searchText: string;
  public filterContacts: IContact[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): IContact[] {
    this.filterContacts = this.contacts;
    if (this.searchText && this.searchText !== '' && this.searchText.length > 3) {
      this.filterContacts = [];
      Object.values(this.contacts).forEach(contact => {
       if (contact.name.match(this.searchText) !== null) {
         this.filterContacts.push(contact);
        }
      });
      return this.filterContacts;
    }
  }

  ngOnInit(): void {

  }

}

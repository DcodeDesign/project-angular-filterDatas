import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ContactService} from './contact.service';
import {IContact} from './IContact';

@Component({
  selector: 'app-filter-contacts',
  templateUrl: './filter-contacts.component.html',
  styleUrls: ['./filter-contacts.component.scss']
})
export class FilterContactsComponent implements OnInit {
  public contacts: IContact[];
  public searchText = '';

  constructor(private contactService: ContactService ) {
  }

  ngOnInit(): void {
    this.setContact();
  }

  public setContact(): void {
    this.contactService.getContacts()
      .subscribe(
        (value: IContact[]) => {
          this.contacts = value;
        },
        (error) => {
          console.log(error);
        },
        () => {
          // console.log('completed!');
        });
  }

  public addSearchTextEvent(newSearchText: string): void {
    this.searchText = newSearchText;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterContactsComponent } from './components/filter-contacts/filter-contacts.component';
import { CardsContactsComponent } from './components/filter-contacts/cards-contacts/cards-contacts.component';
import { CardComponent } from './components/filter-contacts/Cards-contacts/card/card.component';
import { FieldContactComponent } from './components/filter-contacts/field-contact/field-contact.component';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from './components/filter-contacts/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterContactsComponent,
    CardsContactsComponent,
    CardComponent,
    FieldContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

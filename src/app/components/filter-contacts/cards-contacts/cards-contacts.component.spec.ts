import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContactsComponent } from './cards-contacts.component';

describe('CardsContactsComponent', () => {
  let component: CardsContactsComponent;
  let fixture: ComponentFixture<CardsContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldContactComponent } from './field-contact.component';

describe('FeildContactComponent', () => {
  let component: FieldContactComponent;
  let fixture: ComponentFixture<FieldContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

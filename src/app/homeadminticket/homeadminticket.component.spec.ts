import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeadminticketComponent } from './homeadminticket.component';

describe('HomeadminticketComponent', () => {
  let component: HomeadminticketComponent;
  let fixture: ComponentFixture<HomeadminticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeadminticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeadminticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

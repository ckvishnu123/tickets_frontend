import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbaseComponent } from './ticketbase.component';

describe('TicketbaseComponent', () => {
  let component: TicketbaseComponent;
  let fixture: ComponentFixture<TicketbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometicketsComponent } from './hometickets.component';

describe('HometicketsComponent', () => {
  let component: HometicketsComponent;
  let fixture: ComponentFixture<HometicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HometicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HometicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

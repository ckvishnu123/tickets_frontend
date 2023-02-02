import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageticketadminComponent } from './manageticketadmin.component';

describe('ManageticketadminComponent', () => {
  let component: ManageticketadminComponent;
  let fixture: ComponentFixture<ManageticketadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageticketadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageticketadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

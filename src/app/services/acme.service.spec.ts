import { TestBed } from '@angular/core/testing';

import { AcmeService } from './acme.service';

describe('AcmeService', () => {
  let service: AcmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

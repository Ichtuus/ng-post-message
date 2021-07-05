import { TestBed } from '@angular/core/testing';

import { PrfService } from './prf.service';

describe('PrfService', () => {
  let service: PrfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

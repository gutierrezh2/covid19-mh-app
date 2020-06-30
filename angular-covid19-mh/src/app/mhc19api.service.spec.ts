import { TestBed } from '@angular/core/testing';

import { MHC19ApiService } from './mhc19api.service';

describe('Mhc19apiService', () => {
  let service: MHC19ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MHC19ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

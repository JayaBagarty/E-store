import { TestBed } from '@angular/core/testing';

import { DommyApiService } from './dommy-api.service';

describe('DommyApiService', () => {
  let service: DommyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DommyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

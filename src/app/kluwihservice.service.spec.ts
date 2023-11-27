import { TestBed } from '@angular/core/testing';

import { KluwihserviceService } from './kluwihservice.service';

describe('KluwihserviceService', () => {
  let service: KluwihserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KluwihserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SeatsServicesService } from './seats-services.service';

describe('SeatsServicesService', () => {
  let service: SeatsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

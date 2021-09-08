import { TestBed } from '@angular/core/testing';

import { GardsAuthService } from './gards-auth.service';

describe('GardsAuthService', () => {
  let service: GardsAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardsAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

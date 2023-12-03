import { TestBed } from '@angular/core/testing';

import { GlobleConstantsService } from './globle-constants.service';

describe('GlobleConstantsService', () => {
  let service: GlobleConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobleConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

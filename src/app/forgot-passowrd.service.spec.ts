import { TestBed } from '@angular/core/testing';

import { ForgotPassowrdService } from './forgot-passowrd.service';

describe('ForgotPassowrdService', () => {
  let service: ForgotPassowrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPassowrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

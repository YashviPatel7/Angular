import { TestBed } from '@angular/core/testing';

import { AuthProductService } from "./AuthProductService";

describe('AuthProductService', () => {
  let service: AuthProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

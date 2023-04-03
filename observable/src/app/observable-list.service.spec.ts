import { TestBed } from '@angular/core/testing';

import { ObservableListService } from './observable-list.service';

describe('ObservableListService', () => {
  let service: ObservableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

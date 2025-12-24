import { TestBed } from '@angular/core/testing';

import { Milstone } from './milstone';

describe('Milstone', () => {
  let service: Milstone;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Milstone);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

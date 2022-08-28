import { TestBed } from '@angular/core/testing';

import { ResasService } from './resas.service';

describe('ResasService', () => {
  let service: ResasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

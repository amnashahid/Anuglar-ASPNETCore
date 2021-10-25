import { TestBed } from '@angular/core/testing';

import { AspNetApiService } from './asp-net-api.service';

describe('AspNetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AspNetApiService = TestBed.get(AspNetApiService);
    expect(service).toBeTruthy();
  });
});

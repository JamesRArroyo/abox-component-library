import { TestBed } from '@angular/core/testing';

import { AboxLibraryService } from './abox-library.service';

describe('AboxLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboxLibraryService = TestBed.get(AboxLibraryService);
    expect(service).toBeTruthy();
  });
});

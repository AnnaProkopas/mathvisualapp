import { TestBed } from '@angular/core/testing';

import { TetrahedronService } from './tetrahedron.service';

describe('TetrahedronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TetrahedronService = TestBed.get(TetrahedronService);
    expect(service).toBeTruthy();
  });
});

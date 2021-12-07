import { TestBed } from '@angular/core/testing';

import { MapeadorService } from './mapeador.service';

describe('MapeadorService', () => {
  let service: MapeadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapeadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PokemonCaptureService } from './pokemonCapture.service';

describe('PokemonCaptureService', () => {
  let service: PokemonCaptureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCaptureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

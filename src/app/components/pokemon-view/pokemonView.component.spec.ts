import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewComponent } from './pokemonView.component';

describe('PokemonViewComponentComponent', () => {
  let component: PokemonViewComponent;
  let fixture: ComponentFixture<PokemonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

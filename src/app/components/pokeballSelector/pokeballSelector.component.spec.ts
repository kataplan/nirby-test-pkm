import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballSelectorComponent } from './pokeballSelector.component';

describe('PokeballSelectorComponentComponent', () => {
  let component: PokeballSelectorComponent;
  let fixture: ComponentFixture<PokeballSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeballSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeballSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

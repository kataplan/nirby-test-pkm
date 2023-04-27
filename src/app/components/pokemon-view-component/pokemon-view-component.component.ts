import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-view-component',
  templateUrl: './pokemon-view-component.component.html',
  styleUrls: ['./pokemon-view-component.component.scss']
})
export class PokemonViewComponentComponent {
  
  constructor(
    public pokemonServices: PokemonService,

  ) { }
 

}

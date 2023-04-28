import { Component } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemonView.component.html',
  styleUrls: ['./pokemonView.component.scss']
})
export class PokemonViewComponent {
  
  constructor(public pokemonServices: PokemonService) { }
 
}

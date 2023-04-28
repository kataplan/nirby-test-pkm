import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpeciesList } from 'src/interfaces/speciesList';
import { IPokemonRaw, IPokemonResult, Pokemon } from 'src/interfaces/pokemon';
import { AuthService } from 'src/services/auth.service';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-grass',
  templateUrl: './grass.component.html',
  styleUrls: ['./grass.component.scss']
})
export class GrassComponent {

  constructor(
    private authServices: AuthService,
    private router: Router,
    public pokemonServices: PokemonService,
  ) { }

  ngOnInit():void {
    this.getFirstPokemon()
  }

   /**
   * Function to logout and navigate to home page ("/")
   */
  logout():void {
    this.authServices.logout()
      .then(() => {
        this.router.navigate(['/'])
      })
  }

  /**
   * Function to navigate to a new page
   * @param str a string with a URL
   */
  navigate(str: String):void {
    this.router.navigate([str])
  }
  /**
   * Function to get a random first pokemon from the pokemon API.
   * First it gets the list of all species and get the last pokemon Name, 
   * Second gets the this last pokemon and with the it's id (max limit) it calculate a random id.
   * Then get a pokemon from that id and transform from a IPokemonRaw to a Pokemon interface 
   * And the last step is to set the current pokemon to this new Pokemon.
   */
  getFirstPokemon(): void {
    this.pokemonServices.getPokemonSpeciesList().subscribe(
      (res: SpeciesList) => {
        const lastPokemon: IPokemonResult = res.results[res.results.length - 1]
        console.log(lastPokemon);
        this.pokemonServices.getPokemonByName(lastPokemon.name).subscribe(
          (res: IPokemonRaw) => {
            console.log(res);
            this.pokemonServices.setMaxId(res.id)
            const id = Math.round(res.id * Math.random())
            this.pokemonServices.getPokemon(id).subscribe(
              (res: IPokemonRaw) => {
                const newPokemon: Pokemon = {
                  pokemonId: res.id,
                  pokemonName: res.name,
                  pokemonType: res.types.map(({ type }) => type.name),
                  pokemonImageUrl: res.sprites.front_default
                }
                this.pokemonServices.setCurrentPokemon(newPokemon)
              }
            );
          }
        )
      }
    )
  }

}

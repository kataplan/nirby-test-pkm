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
  maxId: number = 0;

  constructor(
    private authServices: AuthService,
    private router: Router,
    public pokemonServices: PokemonService,
  ) { }


  ngOnInit() {
    this.getFirstPokemon()
  }

  logout() {
    this.authServices.logout()
      .then(() => {
        this.router.navigate(['/'])
      })
  }
  navigate(str: String) {
    this.router.navigate([str])
  }
  getFirstPokemon(): void {
    this.pokemonServices.getPokemonSpeciesList().subscribe(
      (res: SpeciesList) => {
        const lastPokemon: IPokemonResult = res.results[res.results.length - 1]
        console.log(lastPokemon);
        this.pokemonServices.getPokemonByName(lastPokemon.name).subscribe(
          (res: IPokemonRaw) => {
            console.log(res);
            this.maxId = res.id;
            this.pokemonServices.setMaxId(this.maxId)
            const id = Math.round(this.maxId * Math.random())
            this.pokemonServices.getPokemon(id).subscribe(
              (res: IPokemonRaw) => {
                console.log(res.name);

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

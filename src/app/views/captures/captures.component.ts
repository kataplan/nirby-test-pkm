import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonCapture, PokemonCaptureRaw } from 'src/interfaces/pokemonCapture';
import { AuthService } from 'src/services/auth.service';
import { PokemonCaptureService } from 'src/services/pokemonCapture.service';

@Component({
  selector: 'app-captures',
  templateUrl: './captures.component.html',
  styleUrls: ['./captures.component.scss']
})
export class CapturesComponent {
  captureList: PokemonCapture[] = []

  constructor(
    private authServices: AuthService,
    private pokemonCaptureService: PokemonCaptureService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPokemons()
  }
  /**
   * Function to navigate to a new page
   * @param str a string with a URL
   */
  navigate(str: String) {
    this.router.navigate([str])
  }
  /**
  * Function to logout and navigate to home page ("/")
  */
  logout() {
    this.authServices.logout()
      .then(() => {
        this.router.navigate(['/'])
      })
  }
  
  /**
  * Function to get all the userPokemons and trnsform that PokemonCaptureRaw list to a pokemonCapture list.
  *   
  */
  getPokemons(): void {
    this.pokemonCaptureService.getUserPokemon().subscribe(
      (val: PokemonCaptureRaw[]) => this.captureList = val.map<PokemonCapture>(
        ({ captureTime, pokemonId, pokemonName, pokemonType, pokemonImageUrl, userId, documentId }) => {
          const newPokemon: PokemonCapture = {
            pokemonId: pokemonId,
            pokemonName: pokemonName,
            pokemonType: pokemonType,
            pokemonImageUrl: pokemonImageUrl,
            captureTime: captureTime.toDate(),
            userId: userId,
            documentId: documentId
          }
          return newPokemon
        }
      )
    )
  }

  /**
  * Function to call a service that remove a user's pokemon from firestore db.
  * @param pokemon to be removed.
  */
  liberatePokemon(pokemon: PokemonCapture): void {
    this.pokemonCaptureService.removePokemon(pokemon)
  }
}

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

  navigate(str:String){
    this.router.navigate([str])
  }

  logout() {
    this.authServices.logout()
      .then(() => {
        this.router.navigate(['/'])
      })
  }

  getPokemons() {
    this.pokemonCaptureService.getUserPokemon().subscribe(
      (val: PokemonCaptureRaw[]) => this.captureList= val.map<PokemonCapture>(
        ({ captureTime, pokemonId, pokemonName, pokemonType, pokemonImageUrl, userId,documentId }) => {
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
  liberatePokemon(pokemon:PokemonCapture){
    this.pokemonCaptureService.removePokemon(pokemon)
  }
}

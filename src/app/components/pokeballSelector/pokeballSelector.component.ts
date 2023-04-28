import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { IPokemonRaw, Pokemon } from 'src/interfaces/pokemon';
import { PokemonCaptureService } from 'src/services/pokemonCapture.service';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokeball-selector',
  templateUrl: './pokeballSelector.component.html',
  styleUrls: ['./pokeballSelector.component.scss'],
  providers: [MessageService]
})
export class PokeballSelectorComponent {
  items: MenuItem[] = [];
  currentPokeBall = { name: "Poke Ball", capture: 0.25, url: "../../../assets/images/Poke_Ball.webp" }
  pokeballs = [
    { name: "Poke Ball", capture: 0.25, url: "../../../assets/images/Poke_Ball.webp" },
    { name: "Super Ball", capture: 0.50, url: "../../../assets/images/Great_Ball.webp" },
    { name: "Ultra Ball", capture: 0.70, url: "../../../assets/images/Ultra_Ball.webp" },
    { name: "Master Ball", capture: 1, url: "../../../assets/images/Master_Ball.webp" }
  ]

  constructor(
    private messageService: MessageService,
    private pokemonServices: PokemonService,
    private pokemonCaptureServices: PokemonCaptureService
  ) { }

  ngOnInit() {
    this.configureMenu()
  }
  /**
   * Function to configure the pokeball menu.
   */
  configureMenu() {
    this.items = [
      {
        label: 'Acciones',
        items: [
          {
            label: 'Captura',
            command: () => {
              this.capture();
            }
          },
          {
            label: 'Escapa',
            command: () => {
              this.escape();
            }
          }
        ]
      },
      {
        label: 'Selecciona tu Pokeball',
        items: [
          {
            label: '<img src="../../../assets/images/Poke_Ball_Sprite.webp" alt="Poke_Ball_Sprite" /> <span>Poke ball</span>',
            escape: false,
            command: () => { this.selectPokeBall(0) }
          },
          {
            label: '<img src="../../../assets/images/Great_Ball_Sprite.webp" alt="Great_Ball_Sprite" /> <span>Great ball</span>',
            escape: false,
            command: () => { this.selectPokeBall(1) }
          },
          {
            label: '<img src="../../../assets/images/Ultra_Ball_Sprite.webp" alt="Ultra_Ball_Sprite" /> <span>Ultra ball</span>',
            escape: false,
            command: () => { this.selectPokeBall(2) }
          },
          {
            label: '<img src="../../../assets/images/Master_Ball_Sprite.webp" alt="Master_Ball_Sprite" /> <span>Master ball</span>',
            escape: false,
            command: () => { this.selectPokeBall(3) }
          },
        ]
      }
    ];
  }

  /**
   * Function to change the current Pokeball
   * @param id number that is the index of the new pokeball in pokeballs list
   */
  selectPokeBall(id: number): void {
    this.currentPokeBall = this.pokeballs[id]
  }

  /**
   * Function to capture the current pokemon. its random and depends of currentPokeball capture probability.
   * If succed, the pokemon is added to users captures.
   * If not, the pokemon is changed.
  */
  capture(): void {
    this.pokeballAnimation()
    if (Math.random() < this.currentPokeBall.capture) {
      this.pokemonCaptureServices.addPokemon(this.pokemonServices.currentPokemon)
      this.messageService.add({ severity: 'success', summary: 'Pokemon Capturado', detail: 'Se ha guarado en tu PC' });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Oh no...', detail: 'El pokemon se ha escapado' });
    }
    this.getNewPokemon()

  }
  /**
   * Function to animate the pokeball throw
  */
  pokeballAnimation(): void {
    document.getElementById('pokeball')?.animate([
      {
        transform: "scale(1)",
        offset: 0
      },
      {

        transform: "translateY(-500px) scale(.1) rotate(195deg)",
        offset: 1
      }
    ], {
      duration: 500,
      easing: 'ease-out',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'none'
    });
  }

  /**
   * Function to change the current pokemon without trying capturing it
  */
  escape(): void {
    this.messageService.add({ severity: 'success', summary: 'Por poquiiitoo...', detail: 'Lograste escapar con éxito' });
    this.getNewPokemon()
  }

  /**
   * Function to get a new current pokemon
  */
  getNewPokemon(): void {
    const id = Math.round(this.pokemonServices.maxId * Math.random())
    this.pokemonServices.getPokemon(id).subscribe(
      (res: IPokemonRaw) => {
        const newPokemon: Pokemon = {
          pokemonId: res.id,
          pokemonName: res.name,
          pokemonType: res.types.map(({ type }) => type.name),
          pokemonImageUrl: res.sprites.front_default
        }
        this.pokemonServices.setCurrentPokemon(newPokemon)
      })
  }
}


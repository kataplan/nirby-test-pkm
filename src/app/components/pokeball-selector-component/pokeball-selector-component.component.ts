import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { IPokemonRaw, Pokemon } from 'src/interfaces/pokemon';
import { PokemonCaptureService } from 'src/services/pokemon-capture.service';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokeball-selector-component',
  templateUrl: './pokeball-selector-component.component.html',
  styleUrls: ['./pokeball-selector-component.component.scss'],
  providers: [MessageService]
})
export class PokeballSelectorComponentComponent {
  items: MenuItem[] = [];
  pokeballs = [
    { name: "Poke Ball", capture: 0.25, url: "../../../assets/images/Poke_Ball.webp" },
    { name: "Super Ball", capture: 0.50, url: "../../../assets/images/Great_Ball.webp" },
    { name: "Ultra Ball", capture: 0.70, url: "../../../assets/images/Ultra_Ball.webp" },
    { name: "Master Ball", capture: 1, url: "../../../assets/images/Master_Ball.webp" }
  ]
  currentPokeBall = { name: "Poke Ball", capture: 0.25, url: "../../../assets/images/Poke_Ball.webp" }
  constructor(
    private messageService: MessageService,
    private pokemonServices: PokemonService,
    private pokemonCaptureServices: PokemonCaptureService
  ) { }
  ngOnInit() {
    this.configureMenu()
  }
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
        label: 'Pokeballs',
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
  selectPokeBall(id: number): void {
    this.currentPokeBall = this.pokeballs[id]
  }

  capture(): void {
    document.getElementById('pokeball')?.animate([
      {
        transform: "scale(1)",
        offset: 0
      },
      {
        
        transform: "translateY(-500px) scale(.1) rotate(195deg)",
        offset: 1
      }
    ],{				 
      duration: 500,
      easing: 'ease-out',
      delay: 0,
      iterations: 1,
      direction: 'normal',
      fill: 'none'
    });
    if (Math.random() < this.currentPokeBall.capture) {
      this.pokemonCaptureServices.addPokemon(this.pokemonServices.currentPokemon)
      this.messageService.add({ severity: 'success', summary: 'Pokemon Capturado', detail: 'Se ha guarado en tu PC' });
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Oh no...', detail: 'El pokemon se ha escapado' });
    }
    this.getNewPokemon()

  }

  escape(): void {
    this.messageService.add({ severity: 'success', summary: 'Por poquiiitoo...', detail: 'Lograste escapar con éxito' });
    this.getNewPokemon()
  }
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


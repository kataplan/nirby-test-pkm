import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SpeciesList } from 'src/interfaces/speciesList';
import { Observable } from 'rxjs'
import { IPokemonRaw, Pokemon } from 'src/interfaces/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private URL = "https://pokeapi.co/api/v2/"
  maxId: number = 0
  currentPokemon: Pokemon = {
    pokemonId: 0,
    pokemonType: [""],
    pokemonName: "",
    pokemonImageUrl: "",

  };
  constructor(private http: HttpClient) { }

  /**
  * Setter of maxId.
  * @param id the new max id
  */
  public setMaxId(id: number): void {
    this.maxId = id
  }

  /**
  * Setter of currentPokemon.
  * @param pokemon the new currentPokemon
  */
  public setCurrentPokemon(pokemon: Pokemon): void {
    this.currentPokemon = pokemon
  }

  /**
  * Get a pokemon from a http consult to PokemonAPI by id
  * @param id for a new pokemon to get
  * @returns Ipokemon raw object result from http consult
  */
  public getPokemon(id: number): Observable<IPokemonRaw> {
    return this.http.get<IPokemonRaw>(`${this.URL}pokemon/${id}`)
  }

  /**
  * Get a pokemon from a http consult to PokemonAPI by name
  * @param name for a new pokemon to get
  * @returns Ipokemon raw object result from http consult
  */
  public getPokemonByName(name: string): Observable<IPokemonRaw> {
    return this.http.get<IPokemonRaw>(`${this.URL}pokemon/${name}`)
  }

  /**
  * Get a List with all the pokemon species
  * @returns Observable of speciesList result from http consult
  */
  public getPokemonSpeciesList(): Observable<SpeciesList> {
    return this.http.get<SpeciesList>(`${this.URL}pokemon-species?limit=100000&offset=0)`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Limit } from 'src/interfaces/limit';
import { Observable, map } from 'rxjs'
import { Pokemon } from 'src/interfaces/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private URL = "https://pokeapi.co/api/v2/"
  maxId:number = 0
  currentPokemon: Pokemon = {
    id: 0,
    types: [""],
    name: "",
    sprites:{front_default:""}

  };
  constructor(private http: HttpClient) { }

  public setMaxId(id:number):void{
    this.maxId=id
  }
  public setCurrentPokemon(pokemon:Pokemon):void{
    this.currentPokemon=pokemon
  }
  public getPokemon(index:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.URL}pokemon/${index}`)
  }
  public getPokemonByName(name:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.URL}pokemon/${name}`)
  }
  public getPokemonLimit():Observable<Limit>{
    return this.http.get<Limit>(`${this.URL}pokemon-species?limit=100000&offset=0)`)
  }
}

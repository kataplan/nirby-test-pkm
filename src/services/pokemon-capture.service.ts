import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, where, query,deleteDoc,doc } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/interfaces/pokemon';
import { PokemonCapture, PokemonCaptureRaw } from 'src/interfaces/pokemon-capture';

@Injectable({
  providedIn: 'root'
})
export class PokemonCaptureService {

  constructor(private firestore: Firestore) { }

  addPokemon(pokemon: Pokemon) {
    const pokemonCaptured: PokemonCapture = { ...pokemon, userId: getAuth().currentUser?.uid, captureTime: new Date() }
    const pokemonRef = collection(this.firestore, 'pokemon-capture',);
    return addDoc(pokemonRef, pokemonCaptured)
  }
  getUserPokemon(): Observable<PokemonCaptureRaw[]> {
    const pokemonRef = collection(this.firestore, 'pokemon-capture');
    const q = query( pokemonRef, where("userId", "==", getAuth().currentUser?.uid) )
    return collectionData(q,{idField:"documentId"}) as Observable<PokemonCaptureRaw[]>
  }
  removePokemon(pokemon:PokemonCapture):Promise<void>{
    const pokemonRef = doc(this.firestore, `pokemon-capture/${pokemon.documentId}`);
    return deleteDoc(pokemonRef)

  }

}

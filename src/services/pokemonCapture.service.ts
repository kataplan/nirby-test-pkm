import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, where, query, deleteDoc, doc, DocumentData } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/interfaces/pokemon';
import { PokemonCapture, PokemonCaptureRaw } from 'src/interfaces/pokemonCapture';

@Injectable({
  providedIn: 'root'
})
export class PokemonCaptureService {

  constructor(private firestore: Firestore) { }
  /**
  * Add a pokemon with the user id and the curent time to the pokemon-capture collection on firestore db
  * @param pokemon to be added.
  * @returns Promise with the DocumentData.
  */
  addPokemon(pokemon: Pokemon): Promise<DocumentData> {
    const pokemonCaptured: PokemonCapture = { ...pokemon, userId: getAuth().currentUser?.uid, captureTime: new Date() }
    const pokemonRef = collection(this.firestore, 'pokemon-capture',);
    return addDoc(pokemonRef, pokemonCaptured)
  }

  /**
  * Get all the users captured pokemons.
  * @returns Observable with the pokemon capture in raw format (captureTime: timestamp).
  */
  getUserPokemon(): Observable<PokemonCaptureRaw[]> {
    const pokemonRef = collection(this.firestore, 'pokemon-capture');
    const q = query(pokemonRef, where("userId", "==", getAuth().currentUser?.uid))
    return collectionData(q, { idField: "documentId" }) as Observable<PokemonCaptureRaw[]>
  }
  /**
  * Remove a pokemon from firestore with the documentId of the pokemon.
  * @param pokemon that has been captured.
  * @returns Promise void result of deletDoc procedure.
  */
  removePokemon(pokemon: PokemonCapture): Promise<void> {
    const pokemonRef = doc(this.firestore, `pokemon-capture/${pokemon.documentId}`);
    return deleteDoc(pokemonRef)

  }

}

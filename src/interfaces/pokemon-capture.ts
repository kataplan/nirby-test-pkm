import { Pokemon } from "./pokemon";
import { Timestamp } from "firebase/firestore";

export interface PokemonCaptureRaw extends Pokemon {
    userId?: string,
    captureTime: Timestamp,
    documentId: string

}
export interface PokemonCapture extends Pokemon {
    userId?: string,
    captureTime: Date,
    documentId?: string

}

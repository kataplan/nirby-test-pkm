import { IPokemonResult } from "./pokemon";

export interface SpeciesList {
    count:number,
    next:number,
    previous:number,
    results:Array<IPokemonResult>
}

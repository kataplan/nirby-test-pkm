import { IPokemonResult } from "./pokemon";

export interface Limit {
    count:number,
    next:number,
    previous:number,
    results:Array<IPokemonResult>
}

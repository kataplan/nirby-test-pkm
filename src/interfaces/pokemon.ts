export interface Pokemon {
    id:number,
    name:string,
    types:Array<string>
    sprites:{
        front_default:string
    }
}

export interface IPokemonResult {
    name: string;  
    url: string;
  }
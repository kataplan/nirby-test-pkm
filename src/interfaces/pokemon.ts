export interface Pokemon {
    pokemonId: number,
    pokemonName: string,
    pokemonType: Array<string>,
    pokemonImageUrl: string
}
export interface IPokemonRaw {
    id: number,
    name: string,
    types: Array<type>
    sprites: {
        front_default: string
    }
}

export interface IPokemonResult {
    name: string;
    url: string;
}

export interface type {
    slot: number,
    type: {
        name: string,
        url: string,
    }
}
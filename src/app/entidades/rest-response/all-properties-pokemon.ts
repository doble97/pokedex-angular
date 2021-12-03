export interface PokemonProperties {
    // abilities: Array<{ ability: { name: string, url: string } }>
    abilities: Array<{ ability: { name: string } }>
    name: string
    types: Array<{ type: { name: string, url: string } }>
    sprites: { front_default: string, back_default: string }
    id: number
}
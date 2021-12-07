export interface PokemonProperties {
    // abilities: Array<{ ability: { name: string, url: string } }>
    id: number  
    name: string
    abilities: Array<{ ability: { name: string } }>
    types: Array<{ type: { name: string, url: string } }>
    sprites: { front_default: string, back_default: string }
    weight?: number
    order: number
    base_experience: number
    height: number
}
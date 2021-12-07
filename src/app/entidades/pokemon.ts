export interface Pokemon{
    id: number
    name: string
    abilities: string
    types: string
    sprites: {front_img: string, back_img:string}
    weight?: number
    base_experience: number
    height: number
}
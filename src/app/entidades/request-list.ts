import { ResultPokemon } from "./result";

export interface RequestList{
    next: string
    previous: string
    results: Array<ResultPokemon>
}
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private pokemons: Array<Pokemon>
  constructor() { 
    this.pokemons = []
  }
  public addPokemon(pokemon: Pokemon): boolean{

   if(this.pokemons.filter(x=> x.id!=pokemon.id).length==this.pokemons.length){
    this.pokemons[this.pokemons.length] = pokemon
    return true
   }
   return false
  }
  public getFavoritePokemons(){
    return this.pokemons
  }
  public checkFovorite(pokemon:Pokemon):boolean{
    return this.pokemons.filter(x=> x.id==pokemon.id).length==1
  }
}

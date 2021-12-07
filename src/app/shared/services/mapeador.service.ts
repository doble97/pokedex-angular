import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { PokemonProperties } from 'src/app/entidades/rest-response/all-properties-pokemon';

@Injectable({
  providedIn: 'root'
})
export class MapeadorService {

  constructor() { }
  public convertToPokemon(poke: PokemonProperties){
    const pokemon:Pokemon={
      id: poke.id,
      name: poke.name,
      abilities: poke.abilities.map(x => x.ability.name).toString().replace(/,/g,' / '),
      base_experience: poke.base_experience,
      height: poke.height,
      sprites: {back_img:poke.sprites.back_default, front_img:poke.sprites.front_default},
      types: poke.types.map(x=> x.type.name).toString().replace(/,/g,' / '),
      weight: poke.weight
    }
    return pokemon
  }
}

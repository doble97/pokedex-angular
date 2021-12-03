import { Component, Input, OnInit } from '@angular/core';
import { ResultPokemon } from 'src/app/entidades/result';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';
import { Pokemon } from '../../../../entidades/pokemon'
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.css']
})
export class OnePokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() pokemonUrl!: ResultPokemon
  @Input() isFavorite!:boolean

  constructor(private http: PokemonService, private favoritos: FavoritosService) {
  }

  ngOnInit(): void {
    if(this.pokemonUrl){
      this.http.getPokemon(this.pokemonUrl.url).subscribe(poke => {
        this.pokemon = { 
          abilities: poke.abilities.map(x => x.ability.name),
          img: poke.sprites.front_default,
          name: poke.name,
          tipo: poke.types.map(x=> x.type.name),
          id: poke.id
        }
        this.isFavorite = this.favoritos.checkFovorite(this.pokemon)        
      })
      
    }
  }
  public addPokemon(){
    this.isFavorite = this.favoritos.addPokemon(this.pokemon) || this.favoritos.checkFovorite(this.pokemon)
  }

}

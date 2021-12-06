import { Component, Input, OnInit } from '@angular/core';
import { ResultPokemon } from 'src/app/entidades/result';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';
import { Pokemon } from '../../../../entidades/pokemon'
import { ModalDirective } from '../../directivas/modal.directive';
import { PokemonService } from '../../services/pokemon.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.css']
})
export class OnePokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() pokemonUrl!: ResultPokemon
  @Input() isFavorite!:boolean
  @Input() modalDir!: ModalDirective;

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
    this.loadModal()
  }
  public loadModal(){
    const viewContainerRef = this.modalDir.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<ModalComponent>(ModalComponent);
    componentRef.instance.name= this.pokemon.name || "prueba"
  }
}

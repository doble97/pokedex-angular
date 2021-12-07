import { Component, Input, OnInit } from '@angular/core';
import { CallbackModal } from 'src/app/entidades/modal-callback';
import { ResultPokemon } from 'src/app/entidades/result';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';
import { MapeadorService } from 'src/app/shared/services/mapeador.service';
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
  @Input() createModal!:(pokemon:Pokemon, callback: CallbackModal)=>void;
  // private callback = ():void=>{this.addFavorite()}

  constructor(private http: PokemonService, private favoritos: FavoritosService, private mapper: MapeadorService) {
  }

  ngOnInit(): void {
    if(this.pokemonUrl){      
      this.http.getPokemon(this.pokemonUrl.url).subscribe(poke => {
        this.pokemon = this.mapper.convertToPokemon(poke)
        this.isFavorite = this.favoritos.checkFovorite(this.pokemon)        
      })
      
    }
  }
  public loadModal(){
    // const viewContainerRef = this.modalDir.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<ModalComponent>(ModalComponent);
    // componentRef.instance.pokemon = this.pokemon
    // componentRef.instance.callback = this.callback

    this.createModal(this.pokemon, this.callbackFavorite)
  }
  callbackFavorite = ():void =>{
    this.isFavorite = this.favoritos.addPokemon(this.pokemon) || this.favoritos.checkFovorite(this.pokemon)
  }
}

import { Injectable, ViewContainerRef } from '@angular/core';
import { DeleteCallback } from 'src/app/entidades/delete-callback';
import { CallbackModal } from 'src/app/entidades/modal-callback';
import { Pokemon } from 'src/app/entidades/pokemon';
import { PokemonProperties } from 'src/app/entidades/rest-response/all-properties-pokemon';
import { DeleteComponent } from 'src/app/modulos/pokemon/componentes/delete/delete.component';
import { ModalComponent } from 'src/app/modulos/pokemon/componentes/modal/modal.component';
import { PokemonService } from 'src/app/modulos/pokemon/services/pokemon.service';
import { MapeadorService } from './mapeador.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private viewContainerRef!: ViewContainerRef;
  private pokemon!: Pokemon
  private url: string;
  constructor(private http: PokemonService, private mapper: MapeadorService) { 
    this.url = "https://pokeapi.co/api/v2/pokemon/steelix"

  }
  public setContainer(vContainer: ViewContainerRef){{
    this.viewContainerRef = vContainer

  }}
  public createModal(pokemon:Pokemon, vContainer:ViewContainerRef, cb:CallbackModal){
    // this.http.getPokemon(url).subscribe(poke=>{      
    //   this.pokemon = this.mapper.convertToPokemon(poke)
    //   this.viewContainerRef.clear();
    //   const componentRef = this.viewContainerRef.createComponent<ModalComponent>(ModalComponent);
    //   componentRef.instance.pokemon = this.pokemon
    // })
    this.viewContainerRef =vContainer
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent<ModalComponent>(ModalComponent);
    componentRef.instance.pokemon = pokemon
    componentRef.instance.callback = cb
  }
  public createDeleteModal(vContainer: ViewContainerRef, pokemon:Pokemon, cb:DeleteCallback){
    this.viewContainerRef.clear()
    this.viewContainerRef = vContainer
    this.viewContainerRef.clear()
    const componentRef = this.viewContainerRef.createComponent<DeleteComponent>(DeleteComponent);
    componentRef.instance.pokemon = pokemon
    componentRef.instance.callback = cb
    

  }
  public closeModal(){
    this.viewContainerRef.clear()
  }

}

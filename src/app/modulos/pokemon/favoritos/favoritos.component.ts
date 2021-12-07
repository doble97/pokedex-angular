import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DeleteComponent } from '../componentes/delete/delete.component';
import { ModalDirective } from '../directivas/modal.directive';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  @ViewChild(ModalDirective,{static:true}) deleteModal!: ModalDirective;
  public pokemons!: Array<Pokemon>

  constructor(public favoritos:FavoritosService, private mService: ModalService) {

   }

  ngOnInit(): void {
    this.pokemons = this.favoritos.getFavoritePokemons()
  }
  createModal = (pokemon:Pokemon):void=>{
    this.mService.createDeleteModal(this.deleteModal.viewContainerRef, pokemon, this.deletePkm);
  }
  deletePkm = (pokemon:Pokemon)=>{
    this.pokemons = this.favoritos.deleteFavorito(pokemon)
    this.mService.closeModal()
  }

  public fakeModal(){
    const containerRef = this.deleteModal.viewContainerRef
    containerRef.clear()
    containerRef.createComponent<DeleteComponent>(DeleteComponent);
  }
}

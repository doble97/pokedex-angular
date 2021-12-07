import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonRoutingModule } from './pokemon.routing';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { OnePokemonComponent } from './componentes/one-pokemon/one-pokemon.component';
import { ModalDirective } from './directivas/modal.directive';
import { ModalComponent } from './componentes/modal/modal.component';
import { DeleteComponent } from './componentes/delete/delete.component';



@NgModule({
  declarations: [
    ListaPokemonComponent,
    FavoritosComponent,
    OnePokemonComponent,
    ModalDirective,
    ModalComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }

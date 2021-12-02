import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonRoutingModule } from './pokemon.routing';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
  declarations: [
    ListaPokemonComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }

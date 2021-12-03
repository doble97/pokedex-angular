import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { PokemonRoutingModule } from './pokemon.routing';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { OnePokemonComponent } from './componentes/one-pokemon/one-pokemon.component';



@NgModule({
  declarations: [
    ListaPokemonComponent,
    FavoritosComponent,
    OnePokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }

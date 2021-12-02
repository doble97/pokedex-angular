import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritosComponent } from "./favoritos/favoritos.component";
import { ListaPokemonComponent } from "./lista-pokemon/lista-pokemon.component";

const routes: Routes = [
    {path:'', component:ListaPokemonComponent},
    {path:'favoritos', component:FavoritosComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule{}
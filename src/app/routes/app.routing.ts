import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes:Routes = [
    {'path': '', loadChildren:()=>import('../modulos/pokemon/pokemon.module').then(modulo => modulo.PokemonModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
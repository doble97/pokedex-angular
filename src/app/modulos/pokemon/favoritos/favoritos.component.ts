import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { FavoritosService } from 'src/app/shared/services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public pokemons!: Array<Pokemon>

  constructor(public favoritos:FavoritosService) {

   }

  ngOnInit(): void {
    this.pokemons = this.favoritos.getFavoritePokemons()
  }

}

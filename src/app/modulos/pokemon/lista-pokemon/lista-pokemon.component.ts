import { Component, OnInit } from '@angular/core';
import { ResultPokemon } from 'src/app/entidades/result';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  public listUrl: Array<ResultPokemon>

  constructor(private client:PokemonService) { 
    this.listUrl = []
  }

  ngOnInit(): void {
    this.client.getLista().subscribe(result=>{

      this.listUrl = result.results
      console.log(this.listUrl);
      
    })
  }

}

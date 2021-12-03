import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../../../entidades/pokemon'

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.css']
})
export class OnePokemonComponent implements OnInit {
  public pokemon: Pokemon;

  constructor() { 
    this.pokemon = {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      name:'Ditto',
      abilities: ['limber', 'imposter'],
      tipo: ['normal']

    }
  }

  ngOnInit(): void {
  }

}

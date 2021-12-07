import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { ModalService } from 'src/app/shared/services/modal.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() callback!: ()=>void;
  public pokemon!: Pokemon;
  constructor(private http: PokemonService, private m: ModalService) { }

  ngOnInit(): void {
    // this.http.getPokemon(this.http.getTemporary()).subscribe((poke: PokemonProperties)=>{
    //   this.pokemon = poke
    //   console.log('POKEMON', this.pokemon);
    //   this.poke = {
    //     name: this.pokemon.name,
    //     id: this.pokemon.id,
    //     weight: this.pokemon.weight,
    //     heigth: this.pokemon.height,
    //     front_img : this.pokemon.sprites.front_default,
    //     back_img: this.pokemon.sprites.back_default,
    //     abilities: this.pokemon.abilities,
    //     types: this.pokemon.types,
    //     base_exp: this.pokemon.base_experience
    //   }
    // })
    // this.abilities = this.pokemon.abilities.map(x=> x.ability.name).toString().replace(',', ' / ')
    // this.types = this.pokemon.types.map(x=> x.type.name).toString().replace(',',' / ')
    // console.log('haiblidades:', this.abilities);
  }

  public closeModal(){
    this.m.closeModal()
  }
  public addFavorite(){
    this.callback()
    this.m.closeModal()
  }
}

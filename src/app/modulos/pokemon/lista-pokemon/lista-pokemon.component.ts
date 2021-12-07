import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CallbackModal } from 'src/app/entidades/modal-callback';
import { Pokemon } from 'src/app/entidades/pokemon';
import { ResultPokemon } from 'src/app/entidades/result';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalDirective } from '../directivas/modal.directive';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css']
})
export class ListaPokemonComponent implements OnInit {
  public listUrl: Array<ResultPokemon>
  @ViewChild(ModalDirective,{static:true}) modalDirective!: ModalDirective

  constructor(private client:PokemonService, private mService: ModalService) { 
    this.listUrl = []
  }

  ngOnInit(): void {
    this.client.getLista().subscribe(result=>{      
      this.listUrl = result.results
    })
  }
  ngAfterViewInit():void{
    this.mService.setContainer(this.modalDirective.viewContainerRef)    
  }
  myCallback = (pokemon:Pokemon, callback: CallbackModal):void=>{
    this.mService.createModal(pokemon, this.modalDirective.viewContainerRef, callback);
  }

}

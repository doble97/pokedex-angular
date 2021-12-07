import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public pokemon!: Pokemon;
  @Input() callback!: (pokemon: Pokemon)=>void;
  constructor(private mService:ModalService) { }

  ngOnInit(): void {
    
  }

  public cancelModal(){
    this.mService.closeModal()
  }

  

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/entidades/pokemon';
import { RequestList } from 'src/app/entidades/request-list';
import { PokemonProperties } from 'src/app/entidades/rest-response/all-properties-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
  private temporaryUrl!: string;

  constructor(private http: HttpClient) { }

  public getLista(){
    return this.http.get<RequestList>(this.url)
  }
  public getPokemon(url: string){
    return this.http.get<PokemonProperties>(url)
  }

  public setTemporary(url: string){
    this.temporaryUrl = url;
  }
  public getTemporary():string{
    return this.temporaryUrl;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestList } from 'src/app/entidades/request-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"

  constructor(private http: HttpClient) { }

  public getLista(){
    return this.http.get<RequestList>(this.url)
  }
}

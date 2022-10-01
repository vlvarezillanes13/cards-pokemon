import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataPokemon } from '../interfaces/data.interface';
import { IPokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient ) { }

  obtenerPokemones(){
    return this.http.get<IDataPokemon>(this.baseUrl);
  }

  obtenerInformacionPokemon( pokemon:IPokemon ){

    this.http.get(pokemon.url).subscribe(
      ( data:any ) => {
        pokemon.id = data.id;
        pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
        pokemon.weight = data.weight;
        pokemon.height = data.height;
        pokemon.abilities = data.abilities;
      }
    )
    
  }

}

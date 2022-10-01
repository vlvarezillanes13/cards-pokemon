import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../services/pokemones.service';
import { IPokemon } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listaPokemones: IPokemon[];

  constructor(
    private pokemonesService:PokemonesService,
  ) {}

  ngOnInit(){

    this.pokemonesService.obtenerPokemones()
      .subscribe(
        ( { results } ) => {
          this.listaPokemones = results;
          this.listaPokemones.map( (pokemon) => this.pokemonesService.obtenerInformacionPokemon(pokemon) );          
        }
      )    
  }
  

}

import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemon: IPokemon;

  constructor() { }

  ngOnInit() {}

}

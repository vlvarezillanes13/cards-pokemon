import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';



@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CardPokemonComponent
  ]
})
export class ComponentsModule { }

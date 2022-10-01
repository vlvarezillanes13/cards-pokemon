import { IPokemon } from './pokemon.interface';

export interface IDataPokemon {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}
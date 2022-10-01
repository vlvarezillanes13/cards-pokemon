export interface IPokemon{
    id: number;
    name: string;
    url: string;
    img?: string;
    weight? : number;
    height?: number;
    abilities?: IAbilitie[];
}

export interface IAbilitie{
    ability: IAbility;
    is_hidden: boolean;
    slot: number;
}

export interface IAbility{
    name: string;
    url: string;
}
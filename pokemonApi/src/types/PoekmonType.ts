export interface Pokemon {
  name: string;
  url: string;
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
}

export interface pokemonType {
  type: {
    name: string;
    url?: string;
  };
}

export interface PokemonDetailTypes {
  name: string; //이름
  sprites: {
    front_default: string; //이미지지
  };
  types: {
    type: {
      name: string;
      url?: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  moves: Move[];
}

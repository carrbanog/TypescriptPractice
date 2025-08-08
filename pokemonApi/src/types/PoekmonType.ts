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
  stats: {
    base_stat: number;
  }[];

  // stats는 배열 형태이고 그 배열이 요소는 객체 그 객체안에 base_stat라는 숫자가 있다
  moves: Move[];
}

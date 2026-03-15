import { FC } from "react";

import { PokemonDataByName } from "@/data";
import { Link, getPokemonFullId } from "@/utils";

import { PokemonIcon } from "./PokemonIcon";

interface IProps {
  name: string;
}

export const PokemonLink: FC<IProps> = ({ name }) => {
  const pokemon = PokemonDataByName[name];
  return (
    <span className="icon-wrapper-inline">
      <PokemonIcon
        pokemon={pokemon}
        size={24}
      />
      {pokemon ? (
        <Link href={`/p/${getPokemonFullId(pokemon)}`}>
          {pokemon.name}
          {pokemon.formName ? `（${pokemon.formName}）` : null}
        </Link>
      ) : null}
    </span>
  );
};

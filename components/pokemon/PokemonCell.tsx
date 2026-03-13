import { FC } from "react";

import { Pokemon } from "@/types";
import { Link } from "@/utils";
import { getPokemonFullId } from "@/utils";

import { PokemonIcon } from "./PokemonIcon";

interface IProps {
  pokemon?: Pokemon;
}

export const PokemonCell: FC<IProps> = ({ pokemon }) =>
  pokemon ? (
    <Link
      href={`/p/${getPokemonFullId(pokemon)}`}
      className="cell-pokemon"
    >
      <PokemonIcon pokemon={pokemon} />
      <div>
        <div className="pokemon-name">{pokemon.name}</div>
        <div className="pokemon-form">{pokemon.formName}</div>
      </div>
    </Link>
  ) : null;

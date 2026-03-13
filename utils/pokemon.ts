import { Pokemon } from "@/types";

export const getPokemonFullId = (pokemon: Pokemon): string =>
  `${pokemon.dex.toString().padStart(3, "0")}${pokemon.form === 0 ? "" : `-${pokemon.form}`}`;

export const getPokemonFullName = (pokemon: Pokemon): string =>
  pokemon.form > 0 ? `${pokemon.name}-${pokemon.form}` : pokemon.name;

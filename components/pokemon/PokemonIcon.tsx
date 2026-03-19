import cn from "classnames";
import React, { FC, PropsWithChildren } from "react";

import { Pokemon } from "@/types";
import { Link } from "@/utils";
import { getPokemonFullId } from "@/utils";

export interface IPokemonIconProps extends PropsWithChildren {
  pokemon: Pokemon;
  size?: number;
  className?: string;
  link?: boolean;
}

export const PokemonIcon: FC<IPokemonIconProps> = ({ pokemon, size = 64, className = "", link = false, children }) => {
  const { x, y } = pokemon;

  const style: React.CSSProperties = {
    fontSize: `${size}px`,
    backgroundPosition: `-${x}em -${y}em`,
  };
  const combinedClassName = cn("pokemon-icon", className || "");

  return link ? (
    <Link
      href={`/p/${getPokemonFullId(pokemon)}`}
      className={combinedClassName}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <span
      className={combinedClassName}
      style={style}
    >
      {children}
    </span>
  );
};

export const PokemonIconWithName: FC<IPokemonIconProps> = ({ pokemon, link, ...rest }) =>
  link ? (
    <Link
      href={`/p/${getPokemonFullId(pokemon)}`}
      className="flex w-[72px] flex-col items-center"
    >
      <PokemonIcon
        pokemon={pokemon}
        {...rest}
      />
      <div>{pokemon.name}</div>
    </Link>
  ) : (
    <div className="flex w-[72px] flex-col items-center">
      <PokemonIcon
        pokemon={pokemon}
        {...rest}
      />
      <div>{pokemon.name}</div>
    </div>
  );

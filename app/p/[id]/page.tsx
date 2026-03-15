import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { PokemonDetail, PokemonIcon } from "@/components";
import { HabitatDataById, PokemonData } from "@/data";
import { Link } from "@/utils";
import { DEFAULT_TITLE, getPokemonFullId } from "@/utils";

interface IProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { id } = await params;

  const pokemon = PokemonData.find((p) => getPokemonFullId(p) === id);

  if (!pokemon) {
    return {
      title: `宝可梦不存在 - ${DEFAULT_TITLE}`,
    };
  }

  return {
    title: `${pokemon.name} - ${DEFAULT_TITLE}`,
    description: `“${pokemon.name}”是《宝可梦 Pokopia》中登场的宝可梦之一，它的栖息地${pokemon.habitats.length === 0 ? "不明" : `包括${pokemon.habitats.map((h) => HabitatDataById[h]?.name || h).join("、")}`}。`,
  };
};

export async function generateStaticParams() {
  return PokemonData.map((p) => ({ id: getPokemonFullId(p) }));
}

const PokemonDetailPage = async ({ params }: IProps) => {
  const { id } = await params;

  const pokemon = PokemonData.find((p) => getPokemonFullId(p) === id);

  if (!pokemon) notFound();

  const prevPokemon = PokemonData.find((p) => p.id === pokemon.id - 1) || PokemonData[PokemonData.length - 1];
  const nextPokemon = PokemonData.find((p) => p.id === pokemon.id + 1) || PokemonData[0];

  return (
    <Fragment key="pokemon">
      <Head>
        <title>
          {pokemon.name} - {DEFAULT_TITLE}
        </title>
      </Head>

      <section>
        <div className="header-icon">
          <PokemonIcon
            pokemon={pokemon}
            size={128}
          />
        </div>
        <h1>{pokemon.name}</h1>
        <div className="names">
          <div lang="ja">{pokemon.japanese}</div>
          <div>{pokemon.english}</div>
        </div>
        {pokemon.formName ? <div className="text-xl text-gray-600 mb-4">{pokemon.formName}</div> : null}
        <div className="description">{pokemon?.description || "—"}</div>
      </section>

      <PokemonDetail pokemon={pokemon} />

      {/* Navigation */}
      <section className="prev-next">
        {prevPokemon ? (
          <Link
            href={`/p/${getPokemonFullId(prevPokemon)}`}
            className="prev-next-link prev-link"
          >
            <div className="prev-next-arrow">
              ← No.{(prevPokemon.index % 10000).toString().padStart(3, "0")}
              {prevPokemon.isEvent ? "（活动）" : ""}
            </div>
            <div className="prev-next-name">
              <span className="icon-wrapper-inline">
                <span>{prevPokemon.name}</span>
                <PokemonIcon
                  pokemon={prevPokemon}
                  size={24}
                />
              </span>
            </div>
            <div className="pokemon-form">{prevPokemon.formName}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextPokemon ? (
          <Link
            href={`/p/${getPokemonFullId(nextPokemon)}`}
            className="prev-next-link next-link"
          >
            <div className="prev-next-arrow">
              No.{(nextPokemon.index % 10000).toString().padStart(3, "0")}
              {nextPokemon.isEvent ? "（活动）" : ""} →
            </div>
            <div className="prev-next-name">
              <span className="icon-wrapper-inline">
                <PokemonIcon
                  pokemon={nextPokemon}
                  size={24}
                />
                <span>{nextPokemon.name}</span>
              </span>
            </div>
            <div className="pokemon-form">{nextPokemon.formName}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </section>
    </Fragment>
  );
};

export default PokemonDetailPage;

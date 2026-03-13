import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { PokemonDetail, PokemonIcon } from "@/components";
import { PokemonData } from "@/data";
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
    description: `宝可梦“${pokemon.name}”在《宝可梦 Pokopia》中的详细信息。`,
  };
};

export async function generateStaticParams() {
  return PokemonData.map((p) => ({ id: getPokemonFullId(p) }));
}

const PokemonDetailPage = async ({ params }: IProps) => {
  const { id } = await params;

  const pokemon = PokemonData.find((p) => getPokemonFullId(p) === id);

  if (!pokemon) notFound();

  const prevPokemon = PokemonData.find((p) => p.id === pokemon.id - 1);
  const nextPokemon = PokemonData.find((p) => p.id === pokemon.id + 1);

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
      <section className="flex justify-between gap-4">
        {prevPokemon ? (
          <Link
            href={`/p/${getPokemonFullId(prevPokemon)}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-left"
          >
            <div className="text-xs text-gray-400 mb-1">← No.{prevPokemon.dex.toString().padStart(3, "0")}</div>
            <div className="font-medium">{prevPokemon.name}</div>
            <div className="text-xs text-gray-400">{prevPokemon.formName}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextPokemon ? (
          <Link
            href={`/p/${getPokemonFullId(nextPokemon)}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-right"
          >
            <div className="text-xs text-gray-400 mb-1">No.{nextPokemon.dex.toString().padStart(3, "0")} →</div>
            <div className="font-medium">{nextPokemon.name}</div>
            <div className="text-xs text-gray-400">{nextPokemon.formName}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </section>
    </Fragment>
  );
};

export default PokemonDetailPage;

import Head from "next/head";
import { FC, Fragment } from "react";

import { PokemonTable } from "@/components";
import { PokemonData } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

export const metadata = {
  title: `宝可梦一览 - ${DEFAULT_TITLE}`,
  description: "在《宝可梦 Pokopia》中出现的所有宝可梦的列表。",
};

const PokemonListPage: FC = () => (
  <Fragment key="pokemon-list">
    <Head>
      <title>宝可梦一览</title>
    </Head>

    <section>
      <h1>宝可梦一览</h1>
    </section>

    <section>
      <PokemonTable data={PokemonData} />
    </section>
  </Fragment>
);

export default PokemonListPage;

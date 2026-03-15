"use client";

import { Descriptions, DescriptionsProps, Table, TableColumnsType } from "antd";
import { FC, Fragment, ReactNode } from "react";

import { PokemonDataByName } from "@/data";
import { Habitat, Pokemon } from "@/types";
import { DescriptionsCommonProps2, TableCommonProps } from "@/utils";

import { HabitatLink } from "./HabitatLink";
import { ItemLink } from "../item/ItemLink";
import { PokemonLink } from "../pokemon/PokemonLink";
import { PokemonTableColumns } from "../pokemon/PokemonTable";

const getDescriptions = (habitat: Habitat): DescriptionsProps["items"] => [
  {
    key: "id",
    label: "编号",
    children: habitat.id.toString().padStart(3, "0"),
  },
  {
    key: "detail",
    label: "详情",
    children: habitat.detail.map((d, i) => (
      <div key={i}>
        <ItemLink
          name={d.name}
          count={d.count}
        />
      </div>
    )),
  },
];

type MixedPokemon = Pokemon & {
  index: number;
  rarity: string;
  location: string;
};

const columns: TableColumnsType<MixedPokemon> = [
  ...(["宝可梦", "编号", "特长", "栖息地", "时间", "天气"]
    .map((s) => PokemonTableColumns.find((c) => c.title === s)!)
    .filter(Boolean) as TableColumnsType<MixedPokemon>),
  {
    title: "稀有度",
    dataIndex: "rarity",
  },
  {
    title: "位置",
    dataIndex: "location",
  },
];

interface IProps {
  habitat: Habitat;
}

export const HabitatDetail: FC<IProps> = ({ habitat }) => {
  const noteworthyContents: ReactNode[] = [];

  for (const p of habitat.pokemon) {
    const pokemon = PokemonDataByName[p.form];
    const pokemonContents: ReactNode[] = [];
    if (p.rarity === "超稀有") {
      pokemonContents.push(
        <>
          稀有度为“超稀有”，在该栖息地中较难出现。
          {pokemon.habitats.length > 1 ? (
            <>
              不过，它也可能会出现在
              {pokemon.habitats
                .filter((h) => h !== habitat.id)
                .map((h, i) => (
                  <Fragment key={i}>
                    {i === 0 ? null : "、"}
                    <HabitatLink
                      key={h}
                      id={h}
                      showDetail={false}
                    />
                  </Fragment>
                ))}
              。
            </>
          ) : null}
        </>,
      );
    }
    if (p.location !== "全部") {
      pokemonContents.push(<>只会在{p.location}出现。</>);
    }
    switch (pokemon.weather) {
      case "100":
        pokemonContents.push("只在晴天出现。");
        break;
      case "110":
        pokemonContents.push("只在不下雨时出现。");
        break;
      case "001":
        pokemonContents.push("只在下雨天出现。");
        break;
    }
    switch (pokemon.time) {
      case "1110":
        pokemonContents.push("只在白天出现。");
        break;
      case "0001":
        pokemonContents.push("只在夜晚出现。");
        break;
    }
    if (pokemonContents.length > 0) {
      noteworthyContents.push(
        <>
          <PokemonLink name={p.form} />
          {pokemonContents.map((c, i) => (
            <Fragment key={i}>
              {i === 0 ? "" : "另外，它"}
              {c}
            </Fragment>
          ))}
        </>,
      );
    }
  }

  return (
    <>
      <section>
        <p>
          <strong>{habitat.name}</strong>是《宝可梦 Pokopia》中的栖息地之一。它由{" "}
          {habitat.detail.map((d, i) => (
            <Fragment key={i}>
              {i === 0 ? null : "、"}
              <ItemLink
                name={d.name}
                count={d.count}
              />
            </Fragment>
          ))}
          组成。
          {habitat.pokemon.length > 1
            ? `这里可能会出现 ${habitat.pokemon.length} 种宝可梦，包括：`
            : "这里只有可能会出现"}
          {habitat.pokemon.map((p, i) => (
            <Fragment key={i}>
              {i === 0 ? null : "、"}
              <PokemonLink name={p.form} />
            </Fragment>
          ))}
          。
        </p>
        {noteworthyContents.length === 1 ? <p>需要注意的是，{noteworthyContents[0]}</p> : null}
        {noteworthyContents.length > 1 ? (
          <>
            <p>需要注意的是：</p>
            <ul>
              {noteworthyContents.map((content, i) => (
                <li key={i}>{content}</li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <section>
        <h2>基本信息</h2>
        <Descriptions
          {...DescriptionsCommonProps2}
          items={getDescriptions(habitat)}
        />
      </section>

      <section>
        <h2>宝可梦列表</h2>
        <Table<MixedPokemon>
          {...TableCommonProps}
          rowKey={(row) => row.index}
          columns={columns}
          dataSource={habitat.pokemon.map((p, i) => ({
            ...PokemonDataByName[p.form],
            index: i,
            rarity: p.rarity,
            location: p.location,
          }))}
          pagination={false}
        />
      </section>
    </>
  );
};

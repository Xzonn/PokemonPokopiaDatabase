"use client";

import { Descriptions, DescriptionsProps, Table, TableColumnsType } from "antd";
import { FC, Fragment } from "react";

import { PokemonDataByName } from "@/data";
import { Habitat, Pokemon } from "@/types";
import { DescriptionsCommonProps2, TableCommonProps } from "@/utils";

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
        {d.name} × {d.count}
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

export const HabitatDetail: FC<IProps> = ({ habitat }) => (
  <>
    <section>
      <p>
        <strong>{habitat.name}</strong>是《宝可梦 Pokopia》中的栖息地之一。它由
        {habitat.detail.map((d) => ` ${d.count} 个“${d.name}”`).join("、")}组成。共有 {habitat.pokemon.length}{" "}
        种宝可梦在这里栖息，包括：
        {habitat.pokemon.map((p, i) => (
          <Fragment key={i}>
            {i === 0 ? null : "、"}
            <PokemonLink name={p.form} />
          </Fragment>
        ))}
        。
      </p>
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

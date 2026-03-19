"use client";

import { Table, TableColumnsType } from "antd";

import { PokemonDataByName } from "@/data";
import { Habitat } from "@/types";
import { TableCommonProps } from "@/utils";

import { HabitatCell } from "./HabitatCell";
import { ItemLink } from "../item";
import { PokemonIconWithName } from "../pokemon";

export const HabitatTableColumns: TableColumnsType<Habitat> = [
  {
    title: "编号",
    dataIndex: "index",
    render: (index: number, row) => `${(index % 10000).toString().padStart(3, "0")}${row.isEvent ? "（活动）" : ""}`,
  },
  {
    title: "名字",
    dataIndex: "name",
    render: (_, row) => <HabitatCell habitat={row} />,
  },
  {
    title: "宝可梦",
    dataIndex: "pokemon",
    render: (pokemon: Habitat["pokemon"]) => (
      <div className="flex flex-wrap gap-4 text-center">
        {pokemon.map((p) => (
          <PokemonIconWithName
            key={p.form}
            pokemon={PokemonDataByName[p.form]}
            link
          />
        ))}
      </div>
    ),
  },
  {
    title: "详情",
    dataIndex: "detail",
    render: (detail: Habitat["detail"]) =>
      detail.map((d, i) => (
        <div key={i}>
          <ItemLink
            name={d.name}
            count={d.count}
          />
        </div>
      )),
  },
];

interface IHabitatTableProps {
  data?: Habitat[];
}

export const HabitatTable = ({ data }: IHabitatTableProps) => (
  <Table<Habitat>
    {...TableCommonProps}
    rowKey={(row) => row.id}
    columns={HabitatTableColumns}
    dataSource={data}
    pagination={false}
  />
);

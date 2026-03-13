"use client";

import { Table, TableColumnsType } from "antd";

import { HabitatDataById } from "@/data";
import { ESpecialities, Pokemon, PokemonType, Speciality } from "@/types";
import { PokemonTypeFilters, TableCommonProps, TimeIcons, TypeIcons, WeatherIcons } from "@/utils";

import { PokemonCell } from "./PokemonCell";
import { HabitatCell } from "../habitat/HabitatCell";
import { SpecialityLink } from "../speciality";

export const PokemonTableColumns: TableColumnsType<Pokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    render: (_, row) => <PokemonCell pokemon={row} />,
  },
  {
    title: "编号",
    dataIndex: "dex",
    render: (dex) => `${dex}`.padStart(3, "0"),
  },
  {
    title: "属性",
    dataIndex: "types",
    render: (types: Pokemon["types"]) => <TypeIcons types={types} />,
    filters: PokemonTypeFilters,
    onFilter: (value, record) => record.types.includes(value as PokemonType),
  },
  {
    title: "特长",
    dataIndex: "specialties",
    filters: ESpecialities.map((s) => ({ text: s, value: s })),
    onFilter: (value, record) => record.specialties.includes(value as Speciality),
    filterSearch: true,
    render: (specialties: Pokemon["specialties"]) => (
      <div className="flex flex-col">
        {specialties.map((s) => (
          <SpecialityLink
            key={s}
            name={s}
          />
        ))}
      </div>
    ),
  },
  {
    title: "栖息地",
    dataIndex: "habitats",
    render: (habitats: Pokemon["habitats"]) =>
      habitats.map((l) => (
        <HabitatCell
          key={l}
          habitat={HabitatDataById[l]}
        />
      )),
  },
  {
    title: "时间",
    dataIndex: "time",
    render: (time: string) => <TimeIcons time={time} />,
  },
  {
    title: "天气",
    dataIndex: "weather",
    render: (weather: string) => <WeatherIcons weather={weather} />,
  },
];

interface IPokemonTableProps {
  data?: Pokemon[];
}

export const PokemonTable = ({ data }: IPokemonTableProps) => (
  <Table<Pokemon>
    {...TableCommonProps}
    rowKey={(row) => row.id}
    columns={PokemonTableColumns}
    dataSource={data}
    pagination={false}
  />
);

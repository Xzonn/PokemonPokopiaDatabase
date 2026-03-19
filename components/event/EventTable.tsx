"use client";

import { Table, TableColumnsType } from "antd";
import Image from "next/image";

import { PokemonDataByName } from "@/data";
import { Event } from "@/types";
import { Link, TableCommonProps } from "@/utils";

import { PokemonIconWithName } from "../pokemon";

const parseDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map((x) => parseInt(x, 10));
  const date = new Date(year, month - 1, day);
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`;
};

export const EventTableColumns: TableColumnsType<Event> = [
  {
    title: "名字",
    dataIndex: "name",
    render: (name: string, row) =>
      row.newsUrl ? (
        <Link
          href={row.newsUrl}
          target="_blank"
        >
          {name}
        </Link>
      ) : (
        name
      ),
  },
  {
    title: "图片",
    dataIndex: "imageUrl",
    render: (imageUrl: string, row) =>
      imageUrl ? (
        <Image
          src={imageUrl}
          alt={row.name}
          width={160}
          height={90}
        />
      ) : null,
  },
  {
    title: "举办时间",
    dataIndex: "dates",
    render: (dates: Event["dates"]) => (
      <div className="flex text-center gap-4 flex-wrap">
        {dates.map(([start, end], i) => (
          <div key={i}>
            {parseDate(start)}～{parseDate(end)}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "宝可梦",
    dataIndex: "pokemon",
    render: (pokemon: Event["pokemon"]) => (
      <div className="flex text-center gap-4 flex-wrap">
        {pokemon.map((p) => (
          <PokemonIconWithName
            key={p}
            pokemon={PokemonDataByName[p]}
            link
          />
        ))}
      </div>
    ),
  },
];

interface IEventTableProps {
  data?: Event[];
}

export const EventTable = ({ data }: IEventTableProps) => (
  <Table<Event>
    {...TableCommonProps}
    rowKey={(row) => row.id}
    columns={EventTableColumns}
    dataSource={data}
    pagination={false}
  />
);

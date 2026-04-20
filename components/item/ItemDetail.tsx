"use client";

import { Descriptions, DescriptionsProps } from "antd";
import { FC } from "react";

import { HabitatData } from "@/data";
import { Item } from "@/types";
import { DescriptionsCommonProps2 } from "@/utils";

import { HabitatTable } from "../habitat/HabitatTable";

const getDescriptions = (item: Item): DescriptionsProps["items"] => [
  {
    key: "category",
    label: "分类",
    children: item.category || "—",
  },
  {
    key: "label",
    label: "标签",
    children: item.label || "—",
  },
  {
    key: "value",
    label: "交易价值",
    children: item.value ? (
      <>
        <div>通常：{item.value}</div>
        <div>喜爱：{Math.floor(item.value * 1.5)}</div>
      </>
    ) : (
      "—"
    ),
  },
  {
    key: "favorites",
    label: "喜欢的类别",
    children: item.favorites?.length ? item.favorites.map((f, i) => <div key={i}>{f}</div>) : "—",
  },
  // {
  //   key: "obtains",
  //   label: "获取方式",
  //   children: item.obtains.map((o, i) => <div key={i}>{o}</div>),
  // },
];

interface IProps {
  item: Item;
}

export const ItemDetail: FC<IProps> = ({ item }) => {
  const availableHabitats = HabitatData.filter((h) => h.detail.some((d) => d.name === item.name));

  return (
    <>
      <section>
        <p>
          <strong>{item.name}</strong>是《宝可梦 Pokopia》中的道具之一
          {item.category ? `，它是一种${item.category}` : null}。
        </p>
      </section>

      <section>
        <h2>基本信息</h2>
        <Descriptions
          {...DescriptionsCommonProps2}
          items={getDescriptions(item)}
        />
      </section>

      {availableHabitats?.length ? (
        <section>
          <h2>可以组成的栖息地</h2>
          <HabitatTable data={availableHabitats} />
        </section>
      ) : null}
    </>
  );
};

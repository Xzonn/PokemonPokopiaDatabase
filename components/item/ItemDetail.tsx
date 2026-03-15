"use client";

import { FC, Fragment } from "react";

import { HabitatData } from "@/data";
import { Item } from "@/types";

import { HabitatTable } from "../habitat/HabitatTable";

interface IProps {
  item: Item;
}

export const ItemDetail: FC<IProps> = ({ item }) => (
  <>
    <section>
      <p>
        <strong>{item.name}</strong>是《宝可梦 Pokopia》中的道具之一。
      </p>
    </section>

    <section>
      <h2>可以组成的栖息地</h2>
      <HabitatTable data={HabitatData.filter((h) => h.detail.some((d) => d.name === item.name))} />
    </section>
  </>
);

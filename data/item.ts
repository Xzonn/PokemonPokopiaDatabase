import { Item } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./item.txt?raw";

export const ItemData = parseTSV<Item>(raw, (dict) => {
  const index = parseInt(dict["编号"], 10);
  const iconIndex = parseInt(dict["图标"], 10);
  const item: Item = {
    id: index,
    description: dict["图鉴说明"],
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    hasIcon: iconIndex != 0,
    x: iconIndex % 20,
    y: Math.floor(iconIndex / 20),
    category: dict["分类"],
    label: dict["标签"],
    obtains: dict["获得方式"] ? dict["获得方式"].split("|") : [],
    value: parseInt(dict["交易价值"] || "0", 10) || 0,
    favorites: dict["喜欢的类别"] ? dict["喜欢的类别"].split("|") : [],
  };
  return item;
});
export const ItemDataById = Object.fromEntries(ItemData.map((h) => [h.id, h]));
const itemNameCounts = new Map<string, number>();
for (const item of ItemData) itemNameCounts.set(item.name, (itemNameCounts.get(item.name) || 0) + 1);
export const ItemDataByName = Object.fromEntries(
  ItemData.filter((item) => itemNameCounts.get(item.name) === 1).map((item) => [item.name, item]),
);

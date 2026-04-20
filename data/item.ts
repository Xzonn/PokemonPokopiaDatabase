import { Item } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./item.txt?raw";

export const ItemData = parseTSV<Item>(raw, (dict) => {
  const index = parseInt(dict["编号"], 10);
  const iconIndex = parseInt(dict["图标"], 10);
  const item: Item = {
    id: index,
    hash: dict["哈希值"],
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
export const ItemDataById = Object.fromEntries(ItemData.map((h) => [h.hash, h]));
export const ItemDataByName = Object.fromEntries(ItemData.map((h) => [h.name, h]));

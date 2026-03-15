import { Item } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./item.txt?raw";

export const ItemData = parseTSV<Item>(raw, (dict) => {
  const index = parseInt(dict["编号"], 10);
  const hasIcon = dict["图标"] === "1";
  const item: Item = {
    id: index,
    hash: dict["哈希值"],
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    hasIcon,
    x: hasIcon ? index % 20 : 0,
    y: hasIcon ? Math.floor(index / 20) : 0,
  };
  return item;
});
export const ItemDataById = Object.fromEntries(ItemData.map((h) => [h.hash, h]));
export const ItemDataByName = Object.fromEntries(ItemData.map((h) => [h.name, h]));

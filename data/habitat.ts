import { Habitat } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./habitat.txt?raw";

export const HabitatData = parseTSV<Habitat>(raw, (dict, i) => {
  const index = parseInt(dict["编号"], 10);
  const item: Habitat = {
    id: i + 1,
    index,
    isEvent: index > 10000 && index <= 20000,
    isBubblyBasin: index > 20000 && index <= 30000,
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    description: dict["图鉴说明"],
    detail: dict["详情"]
      ? dict["详情"].split("|").map((s, index) => {
          const [name, count] = s.split("×");
          const itemId = parseInt(dict["材料道具编号"].split("|")[index], 10);
          const categoryId = dict["材料类别编号"].split("|")[index];
          return { name, count: parseInt(count), itemId: itemId || undefined, categoryId: categoryId || undefined };
        })
      : [],
    pokemon: dict["宝可梦"]
      ? dict["宝可梦"].split("|").map((s) => {
          const [form, rarity, location, weight] = s.split(",");
          return { form, rarity, location, weight: parseInt(weight, 10) };
        })
      : [],
    x: (i + 1) % 20,
    y: Math.floor((i + 1) / 20),
  };
  return item;
});
export const HabitatDataById = Object.fromEntries(HabitatData.map((h) => [h.index, h]));
export const HabitatDataByName = Object.fromEntries(HabitatData.map((h) => [h.name, h]));

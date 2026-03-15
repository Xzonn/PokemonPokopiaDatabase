import { Habitat } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./habitat.txt?raw";

export const HabitatData = parseTSV<Habitat>(raw, (dict, i) => {
  const index = parseInt(dict["编号"], 10);
  const item: Habitat = {
    id: i + 1,
    index,
    isEvent: index > 10000,
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    description: dict["图鉴说明"],
    detail: dict["详情"]
      ? dict["详情"].split("|").map((s) => {
          const [name, count] = s.split("×");
          return { name, count: parseInt(count || "1") };
        })
      : [],
    pokemon: dict["宝可梦"]
      ? dict["宝可梦"].split("|").map((s) => {
          const [form, rarity, location] = s.split(",");
          return { form, rarity, location };
        })
      : [],
    x: (i + 1) % 20,
    y: Math.floor((i + 1) / 20),
  };
  return item;
});
export const HabitatDataById = Object.fromEntries(HabitatData.map((h) => [h.index, h]));
export const HabitatDataByName = Object.fromEntries(HabitatData.map((h) => [h.name, h]));

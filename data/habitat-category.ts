import { HabitatCategory } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./habitat-category.txt?raw";

export const HabitatCategoryData = parseTSV<HabitatCategory>(raw, (dict) => {
  const iconIndex = parseInt(dict["图标"], 10);
  return {
    id: dict["编号"],
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    items: dict["道具编号"] ? dict["道具编号"].split("|").map((id) => parseInt(id, 10)) : [],
    x: iconIndex % 20,
    y: Math.floor(iconIndex / 20),
  };
});
export const HabitatCategoryDataById = Object.fromEntries(
  HabitatCategoryData.map((category) => [category.id, category]),
);

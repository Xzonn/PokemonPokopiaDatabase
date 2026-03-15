import { Location } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./location.txt?raw";

export const LocationData = parseTSV<Location>(raw, (dict) => {
  const item: Location = {
    id: parseInt(dict["编号"]),
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    icon: dict["图标"],
  };
  return item;
});
export const LocationDataById = Object.fromEntries(LocationData.map((h) => [h.id, h]));
export const LocationDataByName = Object.fromEntries(LocationData.map((h) => [h.name, h]));

import { Event } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./event.txt?raw";

export const EventData = parseTSV<Event>(raw, (dict) => {
  const item: Event = {
    id: parseInt(dict["编号"]),
    name: dict["中文名"],
    dates: dict["举办日期"].split("|").map((date) => date.split(",") as [string, string]),
    pokemon: dict["相关宝可梦"] ? dict["相关宝可梦"].split("|") : [],
    imageUrl: dict["图片"],
    newsUrl: dict["官网"],
  };
  return item;
});

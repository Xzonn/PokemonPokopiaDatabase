import { Habitat } from "./habitat";
import { Item } from "./item";
import { Pokemon } from "./pokemon";

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  language?: "zh" | "zh-hans" | "zh-hant" | "ja" | "en";
}

export type SearchResult =
  | {
      type: "pokemon";
      data: Pokemon;
    }
  | {
      type: "habitat";
      data: Habitat;
    }
  | {
      type: "item";
      data: Item;
    }
  | {
      type: "navigation";
      data: NavigationItem;
    };

export * from "./pokemon";
export * from "./habitat";
export * from "./item";
export * from "./location";
export * from "./event";

export * from "./other";

export interface WalkthroughChapter {
  id: string;
  title: string;
  order: number;
  description: string;
  sections: WalkthroughSection[];
}

export interface WalkthroughSection {
  title: string;
  content: string;
  tips?: string[];
}

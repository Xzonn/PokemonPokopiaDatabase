export interface Habitat {
  id: number;
  index: number;
  isEvent: boolean;
  isBubblyBasin: boolean;
  name: string;
  japanese: string;
  english: string;
  description: string;
  detail: {
    name: string;
    count: number;
    itemId?: number;
    categoryId?: string;
  }[];
  pokemon: {
    form: string;
    rarity: string;
    location: string;
    weight: number;
  }[];
  x: number;
  y: number;
}

export interface HabitatCategory {
  id: string;
  name: string;
  japanese: string;
  english: string;
  items: number[];
  x: number;
  y: number;
}

export interface Habitat {
  id: number;
  index: number;
  isEvent: boolean;
  name: string;
  japanese: string;
  english: string;
  description: string;
  detail: {
    name: string;
    count: number;
  }[];
  pokemon: {
    form: string;
    rarity: string;
    location: string;
  }[];
  x: number;
  y: number;
}

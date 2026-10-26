export interface Item {
  id: number;
  description: string;
  name: string;
  japanese: string;
  english: string;
  hasIcon: boolean;
  x: number;
  y: number;
  category: string;
  label: string;
  obtains: string[];
  value: number;
  favorites: string[];
}

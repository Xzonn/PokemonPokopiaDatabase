export interface Event {
  id: number;
  name: string;
  dates: [string, string][];
  pokemon: string[];
  imageUrl: string;
  newsUrl: string;
}

export const EPokemonType = [
  "一般",
  "格斗",
  "飞行",
  "毒",
  "地面",
  "岩石",
  "虫",
  "幽灵",
  "钢",
  "火",
  "水",
  "草",
  "电",
  "超能力",
  "冰",
  "龙",
  "恶",
  "妖精",
] as const;

export type PokemonType = (typeof EPokemonType)[number];

export const ESpecialities = [
  "点火",
  "栽培",
  "滋润",
  "伐木",
  "建造",
  "重踏",
  "找东西",
  "飞翔",
  "瞬间移动",
  "回收利用",
  "分类",
  "发电",
  "碾压",
  "乱撒",
  "交易",
  "带动气氛",
  "哈欠",
  "梦岛",
  "采蜜",
  "收纳",
  "爆炸",
  "收藏家",
  "稀有物",
  "鉴定",
  "发光",
  "彩绘",
  "贪吃鬼",
  "开派对",
  "DJ",
  "工匠",
] as const;

export type Speciality = (typeof ESpecialities)[number] | "不明";

export interface Pokemon {
  id: number;
  dex: number;
  form: number;
  name: string;
  formName: string;
  japanese: string;
  english: string;
  types: [PokemonType, PokemonType];
  specialties: Speciality[];
  time: string;
  weather: string;
  habitats: number[];
  environment: string;
  favorites: string[];
  category: string;
  description: string;
  height: string;
  weight: string;
  x: number;
  y: number;
}

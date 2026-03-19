import { NavigationItem } from "@/types";

type IHomepageNavigation = {
  title: string;
  contents: {
    title: string;
    contents: NavigationItem[];
  }[];
}[];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { path: "/", label: "首页", icon: "home" },
  { path: "/pokemon-list", label: "宝可梦一览", icon: "pokemon" },
  { path: "/habitat-list", label: "栖息地一览", icon: "habitat" },
  { path: "/event-list", label: "活动一览", icon: "request" },
];

export const HOME_NAVIGATIONS: IHomepageNavigation = [
  {
    title: "站内导航",
    contents: [
      {
        title: "常用列表",
        contents: [
          { path: "/pokemon-list", label: "宝可梦一览", icon: "pokemon" },
          { path: "/habitat-list", label: "栖息地一览", icon: "habitat" },
          { path: "/event-list", label: "活动一览", icon: "request" },
        ],
      },
    ],
  },
  {
    title: "站外导航",
    contents: [
      {
        title: "官方网站",
        contents: [
          {
            path: "https://www.pocoapokemon.jp/sc/",
            label: "简体中文",
            icon: "website-zh-hans",
            language: "zh-hans",
          },
          {
            path: "https://www.pocoapokemon.jp/tc/",
            label: "繁体中文",
            icon: "website-zh-hant",
            language: "zh-hant",
          },
          {
            path: "https://www.pocoapokemon.jp/ja/",
            label: "日文",
            icon: "website-ja",
            language: "ja",
          },
          {
            path: "https://pokopia.pokemon.com/en-us/",
            label: "英文",
            icon: "website-en",
            language: "en",
          },
        ],
      },
      {
        title: "实用网站",
        contents: [
          {
            path: "https://wiki.52poke.com/wiki/Pok%C3%A9mon_Pokopia",
            label: "神奇宝贝百科",
            icon: "52poke",
            language: "zh",
          },
          { path: "https://www.serebii.net/pokemonpokopia/", label: "Serebii.net", icon: "serebii", language: "en" },
          { path: "https://gamewith.jp/pocoapokemon/", label: "GameWith", icon: "gamewith", language: "ja" },
          {
            path: "https://game8.jp/pocoapokemon",
            label: "Game8",
            icon: "game8",
            language: "ja",
          },
        ],
      },
      {
        title: "联系作者",
        contents: [
          { path: "https://space.bilibili.com/16114399", label: "Bilibili", icon: "bilibili" },
          { path: "https://afdian.com/a/xzonn", label: "爱发电", icon: "afdian" },
          // { path: "https://github.com/Xzonn/PokemonLZADatabase", label: "GitHub", icon: "github" },
          { path: "https://sv.xzonn.top/wiki/%E9%A6%96%E9%A1%B5", label: "朱·紫数据库", icon: "sv-wiki" },
          { path: "https://za.xzonn.top/", label: "传说 Z-A 数据库", icon: "za-wiki" },
        ],
      },
    ],
  },
];

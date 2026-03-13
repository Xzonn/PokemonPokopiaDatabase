import { Pokemon, PokemonType, Speciality } from "@/types";
import { getPokemonFullId, getPokemonFullName, parseTSV } from "@/utils";

import raw from "./pokemon.txt?raw";

export const PokemonData = parseTSV<Pokemon>(raw, (dict, index) => {
  const item: Pokemon = {
    id: index + 1,
    dex: parseInt(dict["编号"], 10),
    form: parseInt(dict["形态编号"], 10),
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    formName: dict["形态名"],
    types: [dict["属性1"] as PokemonType, dict["属性2"] as PokemonType],
    specialties: dict["特长"] ? (dict["特长"].split("|") as Speciality[]) : [],
    time: dict["时间"],
    weather: dict["天气"],
    habitats: dict["栖息地"] ? dict["栖息地"].split("|").map((x) => parseInt(x)) : [],
    environment: dict["喜欢的环境"],
    favorites: dict["喜欢的东西"] ? dict["喜欢的东西"].split("|") : [],
    category: dict["分类"],
    description: dict["图鉴说明"],
    height: dict["身高"],
    weight: dict["体重"],
    x: index % 20,
    y: Math.floor(index / 20),
  };
  return item;
});
export const PokemonDataById = Object.fromEntries(PokemonData.map((p) => [p.id, p]));
export const PokemonDataByFullId = Object.fromEntries(PokemonData.map((p) => [getPokemonFullId(p), p]));
export const PokemonDataByName = Object.fromEntries(PokemonData.map((p) => [getPokemonFullName(p), p]));

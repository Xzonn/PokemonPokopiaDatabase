import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={2} />
        的主线剧情中可以遇到苔卡比兽并和它成为朋友。
      </p>
      <p>
        向它供奉不同口味的食物可以获得不同的能力。其中，一般口味的食物提升宝可梦的满意度，苦味的食物提升挖出稀有道具的概率，涩味的食物提升
        <PokemonLink name="凤王" />和<PokemonLink name="洛奇亚" />
        出现的概率，酸味的食物提升电脑商店中优质物品出现的概率，辣味的食物提升栖息地出现宝可梦的概率，甜味的食物提升挖出化石或神秘石板的概率。
      </p>
    </section>
  </>
);
export default Content;

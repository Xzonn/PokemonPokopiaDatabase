import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        苍炎刀鬼的栖息地所需的
        <ItemLink name="咒术之铠" />
        需要
        <ItemLink name="铠甲碎片" />
        才能制作。使用碎岩破坏发光的地面后有概率获得铠甲碎片。
      </p>
      <p>
        向
        <PokemonLink name="卡比兽" />
        供奉苦味的食物可以提升挖出稀有道具的概率。在梦岛似乎挖出铠甲碎片的概率较高。
      </p>
    </section>
  </>
);
export default Content;

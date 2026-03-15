import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        急冻鸟需要在
        <LocationLink id={5} />
        获得双子冰窖的建造套组并将其建造完成后才能遇到。只有遇到急冻鸟和其他两只传说的鸟宝可梦（
        <PokemonLink name="闪电鸟" />和
        <PokemonLink name="火焰鸟" />
        ）之后才能获得海声铃铛的材料单，从而遇到
        <PokemonLink name="洛奇亚" />。
      </p>
      <p>急冻鸟是传说的宝可梦，满足它的居住舒适度可以更容易提升城镇的环境等级。</p>
    </section>
  </>
);
export default Content;

import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        化石翼龙是化石宝可梦之一。完成它的栖息地需要飞翼化石，这种化石只会在
        <LocationLink id={3} />
        中出现。
      </p>
      <p>
        使用碎岩破坏发光的地面后有概率获得化石。向
        <PokemonLink name="卡比兽" />
        供奉甜味的食物可以增加当天化石出现的概率。
      </p>
    </section>
  </>
);
export default Content;

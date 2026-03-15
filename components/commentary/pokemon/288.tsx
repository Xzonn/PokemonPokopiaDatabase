import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        仙子伊布是
        <PokemonLink name="伊布" />
        家族的成员之一。
      </p>
      <p>
        它只会在
        <LocationLink id={5} />
        出现，完成栖息地的道具是
        <ItemLink name="缎带蛋糕" />
        。这个道具需要在
        <LocationLink id={5} />
        制作栖息地并遇到 10 只宝可梦之后从电脑中获得。
      </p>
    </section>
  </>
);
export default Content;

import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={2} />
        的主线剧情中可以遇到雷公并和它成为朋友。
      </p>
      <p>
        雷公有概率位于
        <ItemLink name="皮卡丘玩偶" />
        的梦岛。只有遇到火焰鸟和其他两只凤王卫队宝可梦（
        <PokemonLink name="炎帝" />和
        <PokemonLink name="水君" />
        ）之后才能获得透明铃铛的材料单，从而遇到
        <PokemonLink name="凤王" />。
      </p>
      <p>
        当雷公出现在梦岛上时，周围的墙会出现不一样的花纹。使用宝可梦图鉴可以快速确认当前的梦岛上是否有雷公，只需要将添加状态选择“全部”、位置选择“在目前区域”即可。
      </p>
      <p>雷公是传说的宝可梦，满足它的居住舒适度可以更容易提升城镇的环境等级。</p>
    </section>
  </>
);
export default Content;

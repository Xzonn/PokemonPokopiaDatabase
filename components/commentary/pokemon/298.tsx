import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        凤王有时会从天空中飞过，此时可以听到凤王的叫声。在凤王第二次发出叫声后，它会掉落虹色之羽。用 5 个虹色之羽和 1
        个稀有宝可金属可以合成透明铃铛。
      </p>
      <p>
        向
        <PokemonLink name="卡比兽" />
        供奉涩味的食物可以增加当天凤王和洛奇亚出现的概率。
      </p>
      <p>当凤王从天空中飞过时鸣响透明铃铛，可以让凤王落下来并成为朋友，但无法让凤王留在城镇中居住。</p>
      <p>
        透明铃铛的材料单需要图鉴中登录
        <PokemonLink name="雷公" />、
        <PokemonLink name="炎帝" />、
        <PokemonLink name="水君" />
        。其中雷公在
        <LocationLink id={2} />
        的主线剧情中就可以遇到，而水君和炎帝则需要在梦岛中有概率遇到。
      </p>
      <p>
        雷公有概率位于
        <ItemLink name="皮卡丘玩偶" />
        的梦岛，炎帝有概率位于
        <ItemLink name="风速狗玩偶" />
        的梦岛，水君有概率位于
        <ItemLink name="伊布玩偶" />
        的梦岛。
      </p>
      <p>
        除了制作透明铃铛外，虹色之羽还可以用于和
        <PokemonLink name="索财灵" />、<PokemonLink name="赛富豪" />
        交换家具。
      </p>
    </section>
  </>
);
export default Content;

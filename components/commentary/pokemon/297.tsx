import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";
import { PokemonLink } from "@/components/pokemon/PokemonLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        洛奇亚有时会从天空中飞过，此时可以听到洛奇亚的叫声。在洛奇亚第二次发出叫声后，它会掉落银色之羽。用 5
        个银色之羽和 1 个稀有宝可金属可以合成海声铃铛。
      </p>
      <p>
        向
        <PokemonLink name="卡比兽" />
        供奉涩味的食物可以增加当天凤王和洛奇亚出现的概率。
      </p>
      <p>当洛奇亚从天空中飞过时鸣响海声铃铛，可以让洛奇亚落下来并成为朋友，但无法让洛奇亚留在城镇中居住。</p>
      <p>
        海声铃铛的材料单需要图鉴中登录
        <PokemonLink name="急冻鸟" />、
        <PokemonLink name="闪电鸟" />、
        <PokemonLink name="火焰鸟" />
        。这三只宝可梦都需要在
        <LocationLink id={5} />
        获得对应的建造套组后，建造出双子冰窖／无人发电厂／火光祭坛后才能遇到。
      </p>
      <p>
        除了制作海声铃铛外，银色之羽还可以用于和
        <PokemonLink name="索财灵" />、<PokemonLink name="赛富豪" />
        交换家具。
      </p>
    </section>
  </>
);
export default Content;

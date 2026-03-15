import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { LocationLink } from "@/components/location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={4} />
        的主线剧情中可以遇到超梦并和它成为朋友。
      </p>
      <p>
        在通关之后，可以通过
        <ItemLink name="快龙玩偶" />
        前往梦岛，在快龙的梦岛有概率在地下遇到超梦。此时可以与超梦一起返回住的地方。
      </p>
      <p>
        当超梦出现在梦岛上时，周围的墙会出现不一样的花纹。使用宝可梦图鉴可以快速确认当前的梦岛上是否有超梦，只需要将添加状态选择“全部”、位置选择“在目前区域”即可。
      </p>
      <p>超梦是传说的宝可梦，满足它的居住舒适度可以更容易提升城镇的环境等级。</p>
    </section>
  </>
);
export default Content;

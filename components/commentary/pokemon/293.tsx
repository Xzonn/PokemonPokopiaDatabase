import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";

import { LocationLink } from "../../location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={3} />
        的主线剧情中可以遇到波尔凯尼恩并和它成为朋友。
      </p>
      <p>
        在通关之后，可以在电脑上购买派对锅，然后在
        <LocationLink id={3} />
        再次制作派对咖喱。咖喱完成后，使用
        <ItemLink name="发射筒" />
        发射任意颜色的烟花弹，即可再次遇到波尔凯尼恩，然后让它留在城镇中居住。
      </p>
      <p>波尔凯尼恩是幻之宝可梦，满足它的居住舒适度可以更容易提升城镇的环境等级。</p>
    </section>
  </>
);
export default Content;

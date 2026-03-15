import { FC } from "react";

import { ItemLink } from "@/components/item/ItemLink";
import { LocationLink } from "@/components/location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={1} />
        的主线剧情中可以遇到巨蔓藤博士并和它成为朋友。
      </p>
      <p>
        它会指引百变怪重建城镇。此外，它可以鉴定
        <ItemLink name="大遗失物" />和
        <ItemLink name="小遗失物" />
        。在
        <LocationLink id={5} />
        和云岛，可以通过电脑来鉴定遗失物。
      </p>
    </section>
  </>
);
export default Content;

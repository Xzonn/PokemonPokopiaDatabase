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
        的主线剧情中可以遇到巨锻头头并和它成为朋友。
      </p>
      <p>
        它能够将
        <ItemLink name="铁条" />
        加工成
        <ItemLink name="巨锻齿轮" />
        。此外，它参与建造建筑时，建筑的完成速度比通常要更快。
      </p>
    </section>
  </>
);
export default Content;

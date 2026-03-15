import { FC } from "react";

import { LocationLink } from "../../location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在收集完成全部 27 种神秘石板后，可以前往
        <LocationLink id={1} />
        宝可梦中心北侧的地下遗迹，将所有石板按照未知图腾的顺序放置好之后，即可遇到梦幻。
      </p>
      <p>
        使用碎岩破坏发光的地面后有概率获得神秘石板。在集齐 27
        种神秘石板之前，获得的神秘石板是不会重复的。石板编号与城镇没有关联。
      </p>
      <p>梦幻是幻之宝可梦，满足它的居住舒适度可以更容易提升城镇的环境等级。</p>
    </section>
  </>
);
export default Content;

import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={1} />
        的主线剧情中可以遇到盖欧卡并和它成为朋友。 之后盖欧卡偶尔会出现在
        <LocationLink id={1} />和
        <LocationLink id={2} />
        并带来降雨，但是目前无法让盖欧卡留在城镇中居住。
      </p>
    </section>
  </>
);
export default Content;

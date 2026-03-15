import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在初次进入
        <LocationLink id={5} />
        时可以遇到伊布，随后将会开启伊布家族的任务。
      </p>
    </section>
  </>
);
export default Content;

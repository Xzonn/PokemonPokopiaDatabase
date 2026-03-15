import { FC } from "react";

import { LocationLink } from "@/components/location/LocationLink";

const Content: FC = () => (
  <>
    <section>
      <h2>解说</h2>
      <p>
        在
        <LocationLink id={2} />
        可以遇到图图犬老师并和它成为朋友。
      </p>
    </section>
  </>
);
export default Content;

import Head from "next/head";
import { FC, Fragment } from "react";

import { HabitatTable } from "@/components";
import { HabitatData } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

export const metadata = {
  title: `栖息地一览 - ${DEFAULT_TITLE}`,
  description: "在《宝可梦 Pokopia》中出现的所有栖息地的列表。",
};

const HabitatListPage: FC = () => (
  <Fragment key="habitat-list">
    <Head>
      <title>栖息地一览</title>
    </Head>

    <section>
      <h1>栖息地一览</h1>
    </section>

    <section>
      <HabitatTable data={HabitatData} />
    </section>
  </Fragment>
);

export default HabitatListPage;

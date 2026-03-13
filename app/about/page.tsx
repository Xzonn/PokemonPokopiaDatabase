import Head from "next/head";
import { FC, Fragment } from "react";

const AboutPage: FC = () => (
  <Fragment key="about">
    <Head>
      <title>关于网站</title>
    </Head>

    <section>
      <h1>关于网站</h1>
    </section>

    <section>
      <p>建设中。</p>
    </section>
  </Fragment>
);

export default AboutPage;

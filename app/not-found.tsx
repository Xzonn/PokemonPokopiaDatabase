"use client";

import Head from "next/head";
import { Fragment, useEffect } from "react";

import { PokemonIcon } from "@/components";
import { PokemonDataByName } from "@/data";
import { DEFAULT_TITLE, Link } from "@/utils";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = `页面未找到 - ${DEFAULT_TITLE}`;

    document.querySelector(".giscus")?.classList.add("hidden");

    return () => {
      document.querySelector(".giscus")?.classList.remove("hidden");
    };
  }, []);

  return (
    <Fragment key="not-found">
      <Head>
        <title>页面未找到 - {DEFAULT_TITLE}</title>
      </Head>
      <section
        key="not-found"
        className="not-found-block"
      >
        <div className="not-found-icon">
          <PokemonIcon pokemon={PokemonDataByName["梦幻"]} />
        </div>
        <h1>页面未找到</h1>
        <p>您访问的页面不存在或已被删除。</p>
        <div className="not-found-actions">
          <Link
            href="/"
            className="not-found-button"
          >
            返回首页
          </Link>
          <Link
            href="/"
            onClick={() => window.history.back()}
            className="not-found-button"
          >
            返回上一页
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFoundPage;

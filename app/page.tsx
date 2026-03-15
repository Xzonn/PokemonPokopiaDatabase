"use client";

import Image from "next/image";
import { Fragment, useEffect } from "react";

import logo from "@/assets/images/logo.png";
import { Icon, Link } from "@/utils";
import { DEFAULT_TITLE } from "@/utils";

export default function Home() {
  useEffect(() => {
    document.title = DEFAULT_TITLE;

    document.querySelector("main")?.classList.add("main-home");

    return () => {
      document.querySelector("main")?.classList.remove("main-home");
    };
  }, []);

  return (
    <Fragment key="home">
      {/* Hero Section */}
      <section>
        <div className="text-center py-16 bg-linear-to-br from-secondary to-white rounded-2xl text-primary shadow-lg">
          <div className="mb-4">
            <Image
              src={logo}
              alt="Logo"
              width={64}
              height={64}
              className="block mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">宝可梦 Pokopia 数据库</h1>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-2 gap-8 text-center">
        <Link
          href="/pokemon-list"
          className="group bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-8 border border-gray-100"
        >
          <Icon
            size={48}
            name="pokemon"
            className="mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">宝可梦一览</h2>
        </Link>
        <Link
          href="/habitat-list"
          className="group bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-8 border border-gray-100"
        >
          <Icon
            size={48}
            name="habitat"
            className="mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">栖息地一览</h2>
        </Link>
      </section>
    </Fragment>
  );
}

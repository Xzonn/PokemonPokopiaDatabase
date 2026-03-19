"use client";

import { Card } from "antd";
import Image from "next/image";
import { Fragment, useEffect } from "react";

import logo from "@/assets/images/logo.png";
import { HOME_NAVIGATIONS } from "@/data";
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
      <section>
        <div className="home-title-block">
          <div className="mb-4">
            <Image
              src={logo}
              alt="Logo"
              width={64}
              height={64}
              className="mx-auto block"
            />
          </div>
          <h1>宝可梦 Pokopia 数据库</h1>
        </div>
      </section>

      <section>
        <div className="home-navigation">
          <h2>站内导航</h2>
          <div className="home-links">
            {HOME_NAVIGATIONS[0].contents[0].contents.map((item) => (
              <Card key={item.path}>
                <Link
                  key={item.path}
                  href={item.path}
                  className="home-link-item"
                >
                  <Icon
                    name={item.icon}
                    className="home-link-icon"
                  />
                  <div className="home-link-label">{item.label}</div>
                </Link>
              </Card>
            ))}
          </div>
          <h2>站外导航</h2>
          <div className="home-links">
            {HOME_NAVIGATIONS[1].contents.map((section) => (
              <Card
                key={section.title}
                title={section.title}
                className="home-link-card"
              >
                {section.contents.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="home-link-item"
                  >
                    <Icon
                      name={item.icon}
                      className="home-link-icon"
                    />
                    <div className="home-link-label">{item.label}</div>
                  </Link>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

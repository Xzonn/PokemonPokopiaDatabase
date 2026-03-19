"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Tabs, TabsProps } from "antd";
import { FC, useContext, useMemo, useState } from "react";

import { Link } from "@/utils";

import { Navigation } from "./Navigation";
import { TableOfContents } from "./TableOfContents";
import { TocContext } from "./TocObserver";
import { SearchBar } from "./search";

export const Header: FC = () => {
  const [show, setShow] = useState(false);
  const { tocItems = [] } = useContext(TocContext) || {};

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        key: "nav-site",
        label: "站内导航",
        children: <Navigation onClick={() => setShow(false)} />,
      },
      ...(tocItems.length > 0
        ? [
            {
              key: "nav-toc",
              label: "目录",
              children: <TableOfContents onClick={() => setShow(false)} />,
            },
          ]
        : []),
    ],
    [tocItems.length],
  );

  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-primary flex items-center text-2xl font-bold"
              >
                <span className="logo" />
                Pokopia 数据库
              </Link>
            </div>

            <div className="mx-8 hidden max-w-lg flex-1 md:block">
              <SearchBar />
            </div>

            <div className="md:hidden">
              <button
                className="p-2 transition-colors hover:bg-gray-50"
                aria-label="切换菜单"
                onClick={() => setShow((prev) => !prev)}
              >
                <MenuOutlined className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="header-fake">
        <div />
      </div>
      <Drawer
        destroyOnHidden={true}
        open={show}
        onClose={() => setShow(false)}
        placement="top"
        classNames={{
          body: "flex flex-col gap-4",
        }}
        styles={{
          wrapper: { height: "100%" },
        }}
      >
        <SearchBar onClick={() => setShow(false)} />
        <Tabs items={items} />
      </Drawer>
    </>
  );
};

"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { NAVIGATION_ITEMS } from "@/data";
import { Icon, Link } from "@/utils";

interface INavigationProps {
  onClick?: () => void;
}

export const Navigation: FC<INavigationProps> = ({ onClick }) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return decodeURIComponent(pathname).startsWith(path);
  };

  return (
    <div className="nav-content">
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          onClick={onClick}
          className={cn("nav-item", isActive(item.path) ? "nav-item-active" : "")}
        >
          <span className="nav-item-icon">
            <Icon name={item.icon} />
          </span>
          <span className="nav-item-label">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

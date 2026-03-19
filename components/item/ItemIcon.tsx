import cn from "classnames";
import React, { FC, PropsWithChildren } from "react";

import { Item } from "@/types";
import { Link } from "@/utils";

export interface IItemIconProps extends PropsWithChildren {
  item: Item;
  size?: number;
  className?: string;
  link?: boolean;
}

export const ItemIcon: FC<IItemIconProps> = ({ item, size = 64, className = "", link = false, children }) => {
  const { x, y } = item;

  const style: React.CSSProperties = {
    fontSize: `${size}px`,
    backgroundPosition: `-${x}em -${y}em`,
  };
  const combinedClassName = cn("item-icon", className || "");

  return link ? (
    <Link
      href={`/i/${item.hash}`}
      className={combinedClassName}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <span
      className={combinedClassName}
      style={style}
    >
      {children}
    </span>
  );
};

export const ItemIconWithName: FC<IItemIconProps> = ({ item, link, ...rest }) =>
  link ? (
    <Link
      href={`/i/${item.hash}`}
      className="flex w-[72px] flex-col items-center"
    >
      <ItemIcon
        item={item}
        {...rest}
      />
      <div>{item.name}</div>
    </Link>
  ) : (
    <div className="flex w-[72px] flex-col items-center">
      <ItemIcon
        item={item}
        {...rest}
      />
      <div>{item.name}</div>
    </div>
  );

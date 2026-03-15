import cn from "classnames";
import React, { FC, PropsWithChildren } from "react";

import { Habitat } from "@/types";
import { Link } from "@/utils";

export interface IHabitatIconProps extends PropsWithChildren {
  habitat: Habitat;
  size?: number;
  className?: string;
  link?: boolean;
}

export const HabitatIcon: FC<IHabitatIconProps> = ({ habitat, size = 64, className = "", link = false, children }) => {
  const { x, y } = habitat;

  const style: React.CSSProperties = {
    fontSize: `${size}px`,
    backgroundPosition: `-${x}em -${y}em`,
  };
  const combinedClassName = cn("habitat-icon", className || "");

  return link ? (
    <Link
      href={`/h/${habitat.id.toString().padStart(3, "0")}`}
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

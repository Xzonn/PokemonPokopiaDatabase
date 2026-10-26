import { FC } from "react";

import { HabitatCategory } from "@/types";

interface IProps {
  category: HabitatCategory;
  size?: number;
}

export const HabitatCategoryIcon: FC<IProps> = ({ category, size = 64 }) => (
  <span
    className="item-icon"
    style={{ fontSize: `${size}px`, backgroundPosition: `-${category.x}em -${category.y}em` }}
  />
);

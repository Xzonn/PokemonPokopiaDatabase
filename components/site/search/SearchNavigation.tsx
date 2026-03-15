import Link from "next/link";
import { FC } from "react";

import { NavigationItem } from "@/types";
import { Icon } from "@/utils";

interface IProps {
  result: NavigationItem;
  onClick: () => void;
}

export const SearchNavigation: FC<IProps> = ({ result, onClick }) => (
  <Link
    href={result.path}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name={result.icon}
      size={40}
    />
    <div className="search-item-name">{result.label}</div>
  </Link>
);

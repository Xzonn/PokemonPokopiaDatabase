import Link from "next/link";
import { FC } from "react";

import { Item } from "@/types";

import { ItemIcon } from "../../item/ItemIcon";

interface IProps {
  result: Item;
  onClick: () => void;
}

export const SearchItem: FC<IProps> = ({ result, onClick }) => (
  <Link
    href={`/i/${result.hash}`}
    onClick={onClick}
    className="search-item"
  >
    <ItemIcon
      item={result}
      size={40}
    />
    <div>
      <div className="search-item-name-line">
        <div className="search-item-name">{result.name}</div>
      </div>
    </div>
  </Link>
);

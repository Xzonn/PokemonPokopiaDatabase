import { FC } from "react";

import { HabitatCategoryDataById, ItemDataById, ItemDataByName } from "@/data";
import { Link } from "@/utils";

import { ItemIcon } from "./ItemIcon";
import { HabitatCategoryIcon } from "../habitat/HabitatCategoryIcon";

interface IProps {
  name: string;
  count?: number;
  id?: number;
  categoryId?: string;
}

export const ItemLink: FC<IProps> = ({ name, count, id, categoryId }) => {
  const item = id === undefined ? ItemDataByName[name] : ItemDataById[id];
  const category = categoryId === undefined ? undefined : HabitatCategoryDataById[categoryId];
  return (
    <>
      <span className="icon-wrapper-inline">
        {category ? (
          <HabitatCategoryIcon
            category={category}
            size={24}
          />
        ) : item?.hasIcon ? (
          <ItemIcon
            item={item}
            size={24}
          />
        ) : null}
        {category ? (
          <Link href={`/hc/${category.id}`}>{name}</Link>
        ) : item ? (
          <Link href={`/i/${item.id}`}>{name}</Link>
        ) : (
          <span>{name}</span>
        )}
      </span>
      {count !== undefined ? ` × ${count}` : null}
    </>
  );
};

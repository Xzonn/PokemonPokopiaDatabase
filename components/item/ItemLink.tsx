import { FC } from "react";

import { ItemDataByName } from "@/data";
import { Link } from "@/utils";

import { ItemIcon } from "./ItemIcon";

interface IProps {
  name: string;
  count?: number;
}

export const ItemLink: FC<IProps> = ({ name, count }) => {
  const item = ItemDataByName[name];
  return (
    <>
      <span className="icon-wrapper-inline">
        {item?.hasIcon ? (
          <ItemIcon
            item={item}
            size={24}
          />
        ) : null}
        {item ? <Link href={`/i/${item.hash}`}>{item.name}</Link> : null}
      </span>
      {count !== undefined ? ` × ${count}` : null}
    </>
  );
};

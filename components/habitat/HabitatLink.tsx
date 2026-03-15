import { FC, Fragment } from "react";

import { HabitatDataById } from "@/data";
import { Link } from "@/utils";

import { HabitatIcon } from "./HabitatIcon";
import { ItemLink } from "../item/ItemLink";

interface IProps {
  id: number;
  showDetail?: boolean;
}

export const HabitatLink: FC<IProps> = ({ id, showDetail = true }) => {
  const habitat = HabitatDataById[id];
  return (
    <>
      <span className="icon-wrapper-inline">
        <HabitatIcon
          habitat={habitat}
          size={24}
        />
        {habitat ? <Link href={`/h/${id.toString().padStart(3, "0")}`}>{habitat.name}</Link> : <span>不明</span>}
      </span>
      {habitat && showDetail ? (
        <>
          （包括：
          {habitat.detail.map((d, i) => (
            <Fragment key={i}>
              {i === 0 ? null : "、"}
              <ItemLink
                name={d.name}
                count={d.count}
              />
            </Fragment>
          ))}
          ）
        </>
      ) : null}
    </>
  );
};

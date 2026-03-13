import { FC, Fragment } from "react";

import { HabitatDataById } from "@/data";
import { Link } from "@/utils";

import { HabitatIcon } from "./HabitatIcon";

interface IProps {
  id: number;
}

export const HabitatLink: FC<IProps> = ({ id }) => {
  const habitat = HabitatDataById[id];
  return (
    <span className="icon-wrapper-inline">
      <HabitatIcon
        habitat={habitat}
        size={24}
      />
      {habitat ? <Link href={`/h/${id.toString().padStart(3, "0")}`}>{habitat.name}</Link> : <span>不明</span>}
      {habitat ? (
        <>
          （
          {habitat.detail.map((d, i) => (
            <Fragment key={i}>
              {i === 0 ? null : "、"}
              {d.name} × {d.count}
            </Fragment>
          ))}
          ）
        </>
      ) : null}
    </span>
  );
};

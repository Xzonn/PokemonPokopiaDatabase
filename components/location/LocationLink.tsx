import { FC, Fragment } from "react";

import { LocationDataById } from "@/data";
import { Icon } from "@/utils";

interface IProps {
  id: number;
}

export const LocationLink: FC<IProps> = ({ id }) => {
  const location = LocationDataById[id];
  return (
    <>
      <span className="icon-wrapper-inline">
        <Icon
          name={location?.icon}
          size={24}
        />
        {location ? <span>{location.name}</span> : <span>不明</span>}
      </span>
    </>
  );
};

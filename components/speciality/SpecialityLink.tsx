import { FC } from "react";

import { Icon } from "@/utils";

interface IProps {
  name: string;
}

export const SpecialityLink: FC<IProps> = ({ name }) => (
  <span className="icon-wrapper-inline">
    <Icon name={name} />
    {name === "不明" ? <span>不明</span> : <span>{name}</span>}
  </span>
);

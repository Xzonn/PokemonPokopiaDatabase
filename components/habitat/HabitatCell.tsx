import { FC } from "react";

import { Habitat } from "@/types";
import { Link } from "@/utils";

import { HabitatIcon } from "./HabitatIcon";

interface IProps {
  habitat?: Habitat;
}

export const HabitatCell: FC<IProps> = ({ habitat }) =>
  habitat ? (
    <Link
      href={`/h/${habitat.index.toString().padStart(3, "0")}`}
      className="cell-habitat"
    >
      <HabitatIcon habitat={habitat} />
      {habitat.name}
    </Link>
  ) : null;

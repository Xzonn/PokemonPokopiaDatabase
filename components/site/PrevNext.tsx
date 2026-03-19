import { FC, ReactNode } from "react";

import { Link } from "@/utils";

interface IPrevNextItem {
  id: string;
  name: string;
  icon?: ReactNode;
  formName?: string;
  link: string;
  isEvent?: boolean;
}

interface IProps {
  prev?: IPrevNextItem | null;
  next?: IPrevNextItem | null;
}

export const PrevNext: FC<IProps> = ({ prev, next }) => (
  <section className="prev-next">
    {prev ? (
      <Link
        href={prev.link}
        className="prev-next-link prev-link"
      >
        <div className="prev-next-arrow">
          ← {prev.id ? `No.${prev.id}` : null}
          {prev.isEvent ? "（活动）" : ""}
        </div>
        <div className="prev-next-name">
          <span className="icon-wrapper-inline">
            <span>{prev.name}</span>
            {prev.icon || null}
          </span>
        </div>
        {prev.formName ? <div className="pokemon-form">{prev.formName}</div> : null}
      </Link>
    ) : (
      <div className="flex-1" />
    )}
    {next ? (
      <Link
        href={next.link}
        className="prev-next-link next-link"
      >
        <div className="prev-next-arrow">
          {next.id ? `No.${next.id}` : null}
          {next.isEvent ? "（活动）" : ""} →
        </div>
        <div className="prev-next-name">
          <span className="icon-wrapper-inline">
            {next.icon || null}
            <span>{next.name}</span>
          </span>
        </div>
        {next.formName ? <div className="pokemon-form">{next.formName}</div> : null}
      </Link>
    ) : (
      <div className="flex-1" />
    )}
  </section>
);

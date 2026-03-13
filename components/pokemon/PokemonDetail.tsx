"use client";

import { Descriptions, DescriptionsProps } from "antd";
import { FC, Fragment } from "react";

import { HabitatDataById } from "@/data";
import { Pokemon } from "@/types";
import { DescriptionsCommonProps2, TimeIcons, TypeIcons, WeatherIcons } from "@/utils";

import { HabitatCell, HabitatLink } from "../habitat";
import { SpecialityLink } from "../speciality";

const getDescriptions = (pokemon: Pokemon): DescriptionsProps["items"] => [
  {
    key: "dex",
    label: "图鉴编号",
    children: pokemon.dex.toString().padStart(3, "0"),
  },
  {
    key: "category",
    label: "分类",
    children: `${pokemon.category || "？？"}宝可梦`,
  },
  {
    key: "height",
    label: "身高",
    children: `${pokemon.height || "??.?"}m`,
  },
  {
    key: "weight",
    label: "体重",
    children: `${pokemon.weight || "??.?"}kg`,
  },
  {
    key: "types",
    label: "属性",
    children: <TypeIcons types={pokemon.types} />,
  },
  {
    key: "specialties",
    label: "特长",
    children: (
      <div className="flex flex-col">
        {pokemon.specialties.map((s) => (
          <SpecialityLink
            key={s}
            name={s}
          />
        ))}
      </div>
    ),
  },
  {
    key: "time",
    label: "时间",
    children: <TimeIcons time={pokemon.time} />,
  },
  {
    key: "weather",
    label: "天气",
    children: <WeatherIcons weather={pokemon.weather} />,
  },
  {
    key: "favorites",
    label: "喜欢的东西",
    children: pokemon.favorites.length > 0 ? pokemon.favorites.join(" / ") : "无",
  },
  {
    key: "environment",
    label: "喜欢的环境",
    children: pokemon.environment,
  },
  {
    key: "habitats",
    label: "栖息地",
    children:
      pokemon.habitats.length > 0
        ? pokemon.habitats.map((l) => (
            <div
              className="icon-wrapper"
              key={l}
            >
              <HabitatCell habitat={HabitatDataById[l]} />
              <div>
                （
                {HabitatDataById[l].detail.map((d, i) => (
                  <Fragment key={i}>
                    {i === 0 ? null : "、"}
                    {d.name} × {d.count}
                  </Fragment>
                ))}
                ）
              </div>
            </div>
          ))
        : "无",
    span: 2,
  },
];

interface IProps {
  pokemon: Pokemon;
}

export const PokemonDetail: FC<IProps> = ({ pokemon }) => {
  const knownHabitats = pokemon.habitats;

  return (
    <>
      <section>
        <p>
          <strong>{pokemon.name}</strong>
          {pokemon.formName ? `（${pokemon.formName}）` : null}是《宝可梦 Pokopia》中登场的宝可梦之一。它的特长
          {pokemon.specialties[0] === "不明" ? (
            "不明"
          ) : (
            <>
              是<SpecialityLink name={pokemon.specialties[0]} />
              {pokemon.specialties.length === 2 ? (
                <>
                  和
                  <SpecialityLink name={pokemon.specialties[1]} />
                </>
              ) : null}
            </>
          )}
          。它的栖息地
          {knownHabitats.length === 0 ? (
            "不明"
          ) : (
            <>
              {knownHabitats.length === 1 ? "是" : "包括"}
              {knownHabitats.map((id, index) => (
                <Fragment key={index}>
                  {index === 0 ? null : "、"}
                  <HabitatLink id={id} />
                </Fragment>
              ))}
            </>
          )}
          。
          {(() => {
            switch (pokemon.weather) {
              case "111":
                return "可以在任何天气的";
              case "110":
                return "可以在不下雨的";
              case "100":
                return "可以在晴天的";
              case "001":
                return "可以在下雨的";
              default:
                return "出现天气不明、";
            }
          })()}
          {(() => {
            switch (pokemon.time) {
              case "1111":
                return "任何时间遇到它";
              case "1110":
                return "白天的任何时间遇到它";
              case "0001":
                return "夜晚遇到它";
              default:
                return "出现时间不明";
            }
          })()}
          。
        </p>
        <p>
          它喜欢{pokemon.environment}的环境
          {pokemon.favorites.length > 1 ? (
            <>
              ，以及{pokemon.favorites.slice(0, 5).join("、")}物品和{pokemon.favorites[5]}食物
            </>
          ) : null}
          。
        </p>
      </section>

      <section>
        <h2>基本信息</h2>
        <Descriptions
          {...DescriptionsCommonProps2}
          items={getDescriptions(pokemon)}
        />
      </section>
    </>
  );
};

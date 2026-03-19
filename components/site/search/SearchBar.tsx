"use client";

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";
import { Input } from "antd";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

import { HabitatData, ItemData, NAVIGATION_ITEMS as NAVIGATION_ITEMS_UNFILTERED, PokemonData } from "@/data";
import { SearchResult } from "@/types";
import { getPokemonFullId } from "@/utils";

import { SearchHabitat } from "./SearchHabitat";
import { SearchItem } from "./SearchItem";
import { SearchPokemon } from "./SearchPokemon";

const NAV_ITEMS = [...NAVIGATION_ITEMS_UNFILTERED.filter((item) => item && !item.path.slice(1).includes("/"))];

const parseKeywordNumber = (keyword: string) => {
  const number = parseInt(keyword, 10);
  if (number < 0) return NaN;
  return number;
};

const searchAll = (keyword: string): SearchResult[] => {
  if (!keyword) {
    return [];
  }
  const keywordParsed = keyword.trim().toLowerCase();
  const keywordNumber = parseKeywordNumber(keyword);

  const results: SearchResult[] = [];

  PokemonData.filter(
    (pokemon) =>
      pokemon.english.toLowerCase().includes(keywordParsed) ||
      pokemon.name.toLowerCase().includes(keywordParsed) ||
      pokemon.formName.toLowerCase().includes(keywordParsed) ||
      pokemon.index % 10000 === keywordNumber,
  )
    .slice(0, 10)
    .forEach((pokemon) =>
      results.push({
        type: "pokemon",
        data: pokemon,
      }),
    );

  if (results.length < 10) {
    HabitatData.filter(
      (habitat) => habitat.name.toLowerCase().includes(keywordParsed) || habitat.index % 10000 === keywordNumber,
    )
      .slice(0, 10 - results.length)
      .forEach((habitat) =>
        results.push({
          type: "habitat",
          data: habitat,
        }),
      );
  }

  if (results.length < 10) {
    ItemData.filter((item) => item.name.toLowerCase().includes(keywordParsed))
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "item",
          data: item,
        }),
      );
  }

  if (results.length < 10) {
    NAV_ITEMS.filter((item) => item.label.includes(keywordParsed))
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "navigation",
          data: item,
        }),
      );
  }

  return results;
};

const renderSearchResult = (result: SearchResult[], onClick: () => void) => {
  const { length } = result || {};

  if (!result || length === 0) {
    return (
      <div
        key="empty"
        className="px-4 py-3 text-gray-500"
      >
        没有找到相关结果
      </div>
    );
  }

  return (
    <div key="results">
      {result.map((result) => {
        const { type, data } = result;

        switch (type) {
          case "pokemon":
            return (
              <SearchPokemon
                key={`p-${getPokemonFullId(data)}`}
                result={data}
                onClick={onClick}
              />
            );
          case "habitat":
            return (
              <SearchHabitat
                key={`h-${data.index}`}
                result={data}
                onClick={onClick}
              />
            );
          case "item":
            return (
              <SearchItem
                key={`i-${data.hash}`}
                result={data}
                onClick={onClick}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

interface IProps {
  onClick?: () => void;
}

export const SearchBar: FC<IProps> = ({ onClick }) => {
  const pathname = usePathname();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const { run: debounceSearch } = useDebounceFn(
    () => {
      const result = searchAll(searchKeyword.trim());
      setSearchResult(result);
      setShowSearchResults(true);
    },
    { wait: 500 },
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    if (keyword.length > 0) {
      debounceSearch();
    } else {
      setShowSearchResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    setShowSearchResults(false);
  };

  useEffect(handleClearSearch, [pathname]);

  return (
    <div className="relative">
      <Input
        placeholder="搜索"
        value={searchKeyword}
        onChange={handleSearch}
        prefix={<SearchOutlined className="text-gray-400" />}
        suffix={
          searchKeyword ? (
            <CloseOutlined
              className="cursor-pointer text-gray-400"
              onClick={handleClearSearch}
            />
          ) : null
        }
        className="search-input"
      />

      {/* 搜索结果下拉框 */}
      {showSearchResults ? (
        <div className="search-results">
          {renderSearchResult(searchResult, () => {
            handleClearSearch();
            onClick?.();
          })}
        </div>
      ) : null}
    </div>
  );
};

import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { ItemDetail, ItemIcon } from "@/components";
import { ItemData, ItemDataByHash, ItemDataById } from "@/data";
import { Link } from "@/utils";
import { DEFAULT_TITLE } from "@/utils";

interface IProps {
  params: Promise<{ hash: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { hash } = await params;

  const item = ItemDataByHash[hash];

  if (!item) {
    return {
      title: `道具不存在 - ${DEFAULT_TITLE}`,
    };
  }

  return {
    title: `${item.name} - ${DEFAULT_TITLE}`,
    description: `道具“${item.name}”在《宝可梦 Pokopia》中的详细信息。`,
  };
};

export async function generateStaticParams() {
  return ItemData.map((h) => ({ hash: h.hash }));
}

const ItemDetailPage = async ({ params }: IProps) => {
  const { hash } = await params;

  const item = ItemDataByHash[hash];

  if (!item) notFound();

  const prevItem = ItemDataById[item.id - 1];
  const nextItem = ItemDataById[item.id + 1];

  return (
    <Fragment key="item">
      <Head>
        <title>
          {item.name} - {DEFAULT_TITLE}
        </title>
      </Head>

      <section>
        <div className="header-icon">
          <ItemIcon
            item={item}
            size={32}
          />
        </div>
        <h1>{item.name}</h1>
        <div className="names">
          <div lang="ja">{item.japanese}</div>
          <div>{item.english}</div>
        </div>
      </section>

      <ItemDetail item={item} />

      {/* Navigation */}
      <section className="flex justify-between gap-4">
        {prevItem ? (
          <Link
            href={`/i/${prevItem.hash}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-left"
          >
            <div className="text-xs text-gray-400 mb-1">←</div>
            <div className="font-medium">
              <span className="icon-wrapper-inline">
                <span>{prevItem.name}</span>
                <ItemIcon
                  item={prevItem}
                  size={24}
                />
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextItem ? (
          <Link
            href={`/i/${nextItem.hash}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-right"
          >
            <div className="text-xs text-gray-400 mb-1">→</div>
            <div className="font-medium">
              <span className="icon-wrapper-inline">
                <ItemIcon
                  item={nextItem}
                  size={24}
                />
                <span>{nextItem.name}</span>
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </section>
    </Fragment>
  );
};

export default ItemDetailPage;

import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { ItemDetail, ItemIcon } from "@/components";
import { ItemData, ItemDataById } from "@/data";
import { Link } from "@/utils";
import { DEFAULT_TITLE } from "@/utils";

interface IProps {
  params: Promise<{ hash: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { hash } = await params;

  const item = ItemDataById[hash];

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

  const item = ItemDataById[hash];

  if (!item) notFound();

  const prevItem = ItemData.find((i) => i.id === item.id - 1) || ItemData[ItemData.length - 1];
  const nextItem = ItemData.find((i) => i.id === item.id + 1) || ItemData[0];

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
      <section className="prev-next">
        {prevItem ? (
          <Link
            href={`/i/${prevItem.hash}`}
            className="prev-next-link prev-link"
          >
            <div className="prev-next-arrow">←</div>
            <div className="prev-next-name">
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
            className="prev-next-link next-link"
          >
            <div className="prev-next-arrow">→</div>
            <div className="prev-next-name">
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

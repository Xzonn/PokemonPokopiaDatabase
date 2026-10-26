import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { ItemDetail, ItemIcon, PrevNext } from "@/components";
import { ItemData, ItemDataById } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

interface IProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { id } = await params;

  const item = ItemDataById[+id];

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
  return ItemData.map((h) => ({ id: h.id.toString() }));
}

const ItemDetailPage = async ({ params }: IProps) => {
  const { id } = await params;

  const item = ItemDataById[+id];

  if (!item) notFound();

  const index = ItemData.indexOf(item);
  const prevItem = ItemData[(index + ItemData.length - 1) % ItemData.length];
  const nextItem = ItemData[(index + 1) % ItemData.length];

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
            size={48}
          />
        </div>
        <h1>{item.name}</h1>
        <div className="names">
          <div lang="ja">{item.japanese}</div>
          <div>{item.english}</div>
        </div>
      </section>

      <ItemDetail item={item} />

      <PrevNext
        prev={
          prevItem
            ? {
                id: prevItem.id.toString().padStart(3, "0"),
                name: prevItem.name,
                icon: (
                  <ItemIcon
                    item={prevItem}
                    size={24}
                  />
                ),
                link: `/i/${prevItem.id}`,
              }
            : null
        }
        next={
          nextItem
            ? {
                id: nextItem.id.toString().padStart(3, "0"),
                name: nextItem.name,
                icon: (
                  <ItemIcon
                    item={nextItem}
                    size={24}
                  />
                ),
                link: `/i/${nextItem.id}`,
              }
            : null
        }
      />
    </Fragment>
  );
};

export default ItemDetailPage;

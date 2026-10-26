import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { HabitatCategoryIcon, HabitatTable, ItemIconWithName } from "@/components";
import { HabitatCategoryData, HabitatCategoryDataById, HabitatData, ItemDataById } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

interface IProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { id } = await params;
  const category = HabitatCategoryDataById[id];
  return {
    title: `${category?.name || "类别不存在"} - ${DEFAULT_TITLE}`,
  };
};

export async function generateStaticParams() {
  return HabitatCategoryData.map((category) => ({ id: category.id.toString() }));
}

const HabitatCategoryPage = async ({ params }: IProps) => {
  const { id } = await params;
  const category = HabitatCategoryDataById[id];
  if (!category) notFound();

  const habitats = HabitatData.filter((habitat) =>
    habitat.detail.some((material) => material.categoryId === category.id),
  );

  return (
    <Fragment key="habitat-category">
      <Head>
        <title>
          {category.name} - {DEFAULT_TITLE}
        </title>
      </Head>

      <section>
        <div className="header-icon">
          <HabitatCategoryIcon
            category={category}
            size={48}
          />
        </div>
        <h1>{category.name}</h1>
        <div className="names">
          <div lang="ja">{category.japanese}</div>
          <div>{category.english}</div>
        </div>
      </section>

      {category.items.length ? (
        <section>
          <h2>包含的道具</h2>
          <div className="flex flex-wrap gap-4 text-center [&>a]:w-24">
            {category.items.map((itemId) => (
              <ItemIconWithName
                key={itemId}
                item={ItemDataById[itemId]}
                link
              />
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2>可以组成的栖息地</h2>
        <HabitatTable data={habitats} />
      </section>
    </Fragment>
  );
};

export default HabitatCategoryPage;

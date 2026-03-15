import Head from "next/head";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { HabitatDetail, HabitatIcon } from "@/components";
import { HabitatData, HabitatDataById } from "@/data";
import { Link } from "@/utils";
import { DEFAULT_TITLE } from "@/utils";

interface IProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({ params }: IProps) => {
  const { id } = await params;

  const habitat = HabitatDataById[+id];

  if (!habitat) {
    return {
      title: `栖息地不存在 - ${DEFAULT_TITLE}`,
    };
  }

  return {
    title: `${habitat.name} - ${DEFAULT_TITLE}`,
    description: `“${habitat.name}”是《宝可梦 Pokopia》中的栖息地之一，它由${habitat.detail.map((d) => `${d.name} × ${d.count}`).join("、")} 组成。${habitat.pokemon.map((p) => p.form.split("-")[0]).join("、")}可能会在这里出现。`,
  };
};

export async function generateStaticParams() {
  return HabitatData.map((h) => ({ id: h.id.toString().padStart(3, "0") }));
}

const HabitatDetailPage = async ({ params }: IProps) => {
  const { id } = await params;

  const habitat = HabitatDataById[+id];

  if (!habitat) notFound();

  const prevHabitat = HabitatDataById[habitat.id - 1];
  const nextHabitat = HabitatDataById[habitat.id + 1];

  return (
    <Fragment key="habitat">
      <Head>
        <title>
          {habitat.name} - {DEFAULT_TITLE}
        </title>
      </Head>

      <section>
        <div className="header-icon">
          <HabitatIcon
            habitat={habitat}
            size={128}
          />
        </div>
        <h1>{habitat.name}</h1>
        <div className="names">
          <div lang="ja">{habitat.japanese}</div>
          <div>{habitat.english}</div>
        </div>
        <div className="description">{habitat?.description || "—"}</div>
      </section>

      <HabitatDetail habitat={habitat} />

      {/* Navigation */}
      <section className="flex justify-between gap-4">
        {prevHabitat ? (
          <Link
            href={`/h/${prevHabitat.id.toString().padStart(3, "0")}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-left"
          >
            <div className="text-xs text-gray-400 mb-1">← No.{prevHabitat.id.toString().padStart(3, "0")}</div>
            <div className="font-medium">
              <span className="icon-wrapper-inline">
                <span>{prevHabitat.name}</span>
                <HabitatIcon
                  habitat={prevHabitat}
                  size={24}
                />
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextHabitat ? (
          <Link
            href={`/h/${nextHabitat.id.toString().padStart(3, "0")}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-right"
          >
            <div className="text-xs text-gray-400 mb-1">No.{nextHabitat.id.toString().padStart(3, "0")} →</div>
            <div className="font-medium">
              <span className="icon-wrapper-inline">
                <HabitatIcon
                  habitat={nextHabitat}
                  size={24}
                />
                <span>{nextHabitat.name}</span>
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

export default HabitatDetailPage;

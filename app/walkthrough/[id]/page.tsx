import { notFound } from "next/navigation";

import walkthroughData from "@/data/walkthrough.json";
import { WalkthroughChapter } from "@/types";
import { Link } from "@/utils";

const chapters = (walkthroughData as WalkthroughChapter[]).sort((a, b) => a.order - b.order);

export async function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ChapterPage({ params }: Props) {
  const { id } = await params;
  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) notFound();

  const currentIndex = chapters.findIndex((c) => c.id === id);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/walkthrough"
          className="text-sm text-red-600 hover:underline"
        >
          ← 返回攻略列表
        </Link>
      </div>

      {/* Chapter Header */}
      <div className="rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-8 text-white shadow">
        <div className="mb-1 text-sm font-medium text-red-200">第 {chapter.order} 章</div>
        <h1 className="mb-3 text-3xl font-bold">{chapter.title}</h1>
        <p className="leading-relaxed text-red-100">{chapter.description}</p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {chapter.sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow"
          >
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                {idx + 1}
              </span>
              {section.title}
            </h2>
            <p className="leading-relaxed text-gray-600">{section.content}</p>

            {section.tips && section.tips.length > 0 ? (
              <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
                <h3 className="mb-2 flex items-center gap-1 text-sm font-bold text-yellow-800">💡 实用技巧</h3>
                <ul className="space-y-1">
                  {section.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-yellow-900"
                    >
                      <span className="shrink-0 text-yellow-500">▸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Chapter Navigation */}
      <div className="prev-next pt-2">
        {prevChapter ? (
          <Link
            href={`/walkthrough/${prevChapter.id}`}
            className="prev-next-link prev-link"
          >
            <div className="prev-next-arrow">← 上一章</div>
            <div className="prev-next-name">{prevChapter.title}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextChapter ? (
          <Link
            href={`/walkthrough/${nextChapter.id}`}
            className="prev-next-link next-link"
          >
            <div className="prev-next-arrow">下一章 →</div>
            <div className="prev-next-name">{nextChapter.title}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}

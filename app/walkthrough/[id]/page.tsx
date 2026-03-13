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
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/walkthrough"
          className="text-sm text-red-600 hover:underline"
        >
          ← 返回攻略列表
        </Link>
      </div>

      {/* Chapter Header */}
      <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl p-8 shadow">
        <div className="text-sm font-medium text-red-200 mb-1">第 {chapter.order} 章</div>
        <h1 className="text-3xl font-bold mb-3">{chapter.title}</h1>
        <p className="text-red-100 leading-relaxed">{chapter.description}</p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {chapter.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-100 shadow p-6"
          >
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-7 h-7 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                {idx + 1}
              </span>
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>

            {section.tips && section.tips.length > 0 ? (
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-yellow-800 mb-2 flex items-center gap-1">💡 实用技巧</h3>
                <ul className="space-y-1">
                  {section.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-sm text-yellow-900 flex gap-2"
                    >
                      <span className="text-yellow-500 shrink-0">▸</span>
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
      <div className="flex justify-between gap-4 pt-2">
        {prevChapter ? (
          <Link
            href={`/walkthrough/${prevChapter.id}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-left"
          >
            <div className="text-xs text-gray-400 mb-1">← 上一章</div>
            <div className="font-medium">{prevChapter.title}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextChapter ? (
          <Link
            href={`/walkthrough/${nextChapter.id}`}
            className="flex-1 bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition text-right"
          >
            <div className="text-xs text-gray-400 mb-1">下一章 →</div>
            <div className="font-medium">{nextChapter.title}</div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}

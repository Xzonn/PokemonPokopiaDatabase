import walkthroughData from "@/data/walkthrough.json";
import { WalkthroughChapter } from "@/types";
import { Link } from "@/utils";

const chapters = (walkthroughData as WalkthroughChapter[]).sort((a, b) => a.order - b.order);

export default function WalkthroughPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-1">通关攻略</h1>
        <p className="text-gray-500">共 {chapters.length} 章完整攻略</p>
      </div>

      <div className="space-y-4">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/walkthrough/${chapter.id}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md hover:-translate-y-0.5 transition-all p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {chapter.order}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1 group-hover:text-red-600">{chapter.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{chapter.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                  <span>📄 {chapter.sections.length} 小节</span>
                  <span>·</span>
                  <span className="text-red-500 font-medium">查看详情 →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

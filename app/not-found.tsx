import { PokemonIcon } from "@/components";
import { PokemonDataByName } from "@/data";
import { Link } from "@/utils";

const NotFoundPage = () => (
  <div
    key="not-found"
    className="text-center py-20"
  >
    <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
      <PokemonIcon pokemon={PokemonDataByName["梦幻"]} />
    </div>
    <h1>页面未找到</h1>
    <p className="text-xl text-gray-600 mb-8">您访问的页面不存在或已被删除。</p>
    <Link
      href="/"
      className="px-8 py-3 rounded-full font-semibold border-2 border-primary bg-white hover:bg-secondary transition-colors duration-300"
    >
      返回首页
    </Link>
  </div>
);
export default NotFoundPage;

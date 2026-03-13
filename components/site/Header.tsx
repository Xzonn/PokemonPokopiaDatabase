import { FC } from "react";

import { Link } from "@/utils";

export const Header: FC = () => (
  <>
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-primary"
            >
              <span className="logo" />
              Pokopia 数据库
            </Link>
          </div>
        </div>
      </div>
    </header>
    <div className="header-fake">
      <div />
    </div>
  </>
);

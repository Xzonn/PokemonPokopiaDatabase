import "@/assets/css/styles.css";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/next";
import { ConfigProvider, ThemeConfig } from "antd";
import zhCN from "antd/locale/zh_CN";
import { Metadata } from "next";
import { ReactNode } from "react";

import { Footer, Giscus, Header, Sidebar, TocObserver } from "@/components";
import { BREAKPOINTS, DEFAULT_TITLE, SITE_URL } from "@/utils";

const { xs, sm, md, lg, xl, xxl } = BREAKPOINTS;

const theme: ThemeConfig = {
  token: {
    screenXS: xs,
    screenXSMin: xs,
    screenXSMax: sm - 1,
    screenSM: sm,
    screenSMMin: sm,
    screenSMMax: md - 1,
    screenMD: md,
    screenMDMin: md,
    screenMDMax: lg - 1,
    screenLG: lg,
    screenLGMin: lg,
    screenLGMax: xl - 1,
    screenXL: xl,
    screenXLMin: xl,
    screenXLMax: xxl - 1,
    screenXXL: xxl,
    screenXXLMin: xxl,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_TITLE,
  keywords: ["宝可梦", "Pokopia", "攻略", "图鉴", "通关指南"],
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_TITLE,
    url: SITE_URL,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="zh-CN">
    <body>
      <div id="root">
        <ConfigProvider
          locale={zhCN}
          theme={theme}
        >
          <TocObserver>
            <Header />
            <div className="relative flex-1 md:flex">
              <Sidebar />

              <main>
                <AntdRegistry>
                  <div className="bg-white sm:rounded-2xl sm:shadow-xl">
                    {children}
                    <section className="giscus">
                      <Giscus
                        host="https://giscus.xzonn.top"
                        repo="Xzonn/PokemonPokopiaDatabase"
                        repoId="R_kgDORmT12w"
                        category="General"
                        categoryId="DIC_kwDORmT1284C4cEM"
                        mapping="specific"
                        term="评论区"
                        reactions-enabled="1"
                        emit-metadata="0"
                        input-position="top"
                        theme="preferred_color_scheme"
                        lang="zh-CN"
                      />
                    </section>
                  </div>
                </AntdRegistry>
              </main>
            </div>
            <Footer />
          </TocObserver>
        </ConfigProvider>
        <Analytics />
        <script
          src="https://hm.baidu.com/hm.js?3ba4ff308bcec03a61b76097f5b792d8"
          referrerPolicy="no-referrer-when-downgrade"
          async
        />
      </div>
    </body>
  </html>
);
export default RootLayout;

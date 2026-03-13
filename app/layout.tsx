import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, ThemeConfig } from "antd";
import zhCN from "antd/locale/zh_CN";
import type { Metadata } from "next";

import "@/assets/css/styles.css";
import { Footer, Header, Sidebar, TocObserver } from "@/components";
import { BREAKPOINTS, DEFAULT_TITLE } from "@/utils";

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
  title: DEFAULT_TITLE,
  description: DEFAULT_TITLE,
  keywords: ["宝可梦", "Pokopia", "攻略", "图鉴", "通关指南"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div id="root">
          <ConfigProvider
            locale={zhCN}
            theme={theme}
          >
            <Header />
            <TocObserver>
              <div className="md:flex relative flex-1">
                <Sidebar />

                <main>
                  <AntdRegistry>
                    <div className="bg-white sm:rounded-2xl sm:shadow-xl">{children}</div>
                  </AntdRegistry>
                </main>
              </div>
            </TocObserver>
            <Footer />
          </ConfigProvider>
        </div>
      </body>
    </html>
  );
}

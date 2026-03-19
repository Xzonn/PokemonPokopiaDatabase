import { Card } from "antd";
import Head from "next/head";
import Image from "next/image";
import { FC, Fragment } from "react";

import { EventTable, ItemLink } from "@/components";
import { EventData } from "@/data";
import { DEFAULT_TITLE, Link } from "@/utils";

export const metadata = {
  title: `活动一览 - ${DEFAULT_TITLE}`,
  description: "在《宝可梦 Pokopia》中举办的近期活动。",
};

const HabitatListPage: FC = () => (
  <Fragment key="habitat-list">
    <Head>
      <title>活动一览</title>
    </Head>

    <section>
      <h1>活动一览</h1>
    </section>

    <section>
      <h2>活动宝可梦</h2>
      <p>
        活动举办期间，特殊宝可梦会在宝可梦中心重建完成后的城镇出现，但不会在云岛上出现。在此期间可以收集特别物品，用特别物品可以在宝可梦中心与宝可梦交易并获得活动道具。
      </p>
      <p>由于游戏中的时间并不联网，因此可以通过修改主机时间来提前体验未公布的活动，或是重新体验错过的活动。</p>
      <EventTable data={EventData} />
    </section>

    <section>
      <h2>神秘礼物</h2>
      <p>
        与<Link href="https://za.xzonn.top/%E8%81%94%E7%BD%91%E6%B4%BB%E5%8A%A8">《传说 Z-A》</Link>
        类似，可以通过序列号或者联网的方式在游戏中领取神秘礼物。
      </p>
      <div className="activity-card-container">
        <Card title="抢先购买特典：百变怪地垫">
          <div className="text-center">
            <ItemLink
              name="百变怪地垫"
              count={1}
            />
          </div>
          <div>
            <b>领取条件</b>：无
          </div>
          <div>
            <b>领取时间</b>：2026 年 3 月 5 日～2027 年 1 月 31 日
          </div>
        </Card>
        <div />
        <div />
        <div />
      </div>
    </section>

    <section>
      <h2>官方云岛</h2>
      <p>
        在获得护目镜后，可以通过输入密语进入其他人的云岛参观（需要加入 Nintendo Switch Online
        会员）。在参观时可以用相机拍照，从而利用宝可梦中心的打印机复制道具。
      </p>
      <div className="activity-card-container">
        <Card title="宝可梦情报局小镇">
          <Image
            src="https://i.imgur.com/d5cPVn2.jpg"
            alt="宝可梦情报局小镇"
            width={160}
            height={120}
            className="image-x aspect-4/3 w-full"
          />
          <div>
            <b>密语</b>：PXQC G03S
          </div>
        </Card>
        <Card title="狩野英孝的 EIKO 市">
          <Image
            src="https://i.imgur.com/YbYmJB2.jpg"
            alt="狩野英孝的 EIKO 市"
            width={160}
            height={120}
            className="image-x aspect-4/3 w-full"
          />
          <div>
            <b>密语</b>：QBRK 7FVM
          </div>
          <div>
            <b>公开时间</b>：2026 年 8 月 12 日前
          </div>
        </Card>
        <Card title="指原莉乃的指原岛">
          <Image
            src="https://i.imgur.com/OPxq9lN.jpg"
            alt="指原莉乃的指原岛"
            width={160}
            height={120}
            className="image-x aspect-4/3 w-full"
          />
          <div>
            <b>密语</b>：MGL4 83P4
          </div>
          <div>
            <b>公开时间</b>：2026 年 8 月 12 日前
          </div>
        </Card>
        <div />
        <div />
        <div />
      </div>
    </section>
  </Fragment>
);

export default HabitatListPage;

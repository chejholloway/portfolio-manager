"use client";
import React from "react";
import dynamic from "next/dynamic";
import { block } from "million/react-server";
import { TickerTape } from "react-ts-tradingview-widgets";

import AdvancedRealTimeChartBlock from "../Charts/ChartOne";
import TechnicalAnalysisBlock from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import BloombergNewsBlock from "../Charts/ChartTwo";
import TimelineBlock from "../Chat/ChatCard";
import EconomicCalendarBlock from "../Tables/TableOne";

const MarketOverviewBlock = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <TickerTape colorTheme="dark"></TickerTape>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <AdvancedRealTimeChartBlock />
        <BloombergNewsBlock />
        <TechnicalAnalysisBlock />
        <MarketOverviewBlock />
        <div className="col-span-12 xl:col-span-8">
          <EconomicCalendarBlock />
        </div>
        <TimelineBlock />
      </div>
    </>
  );
};

const DashBoardBlock = block(ECommerce);

export default DashBoardBlock;

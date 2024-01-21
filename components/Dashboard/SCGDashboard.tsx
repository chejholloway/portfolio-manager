"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TickerTape } from "react-ts-tradingview-widgets";

import AdvancedRealTimeChartComponent from "../Blocks/AdvancedRealTimeChart";
import TechnicalAnalysisComponent from "../Blocks/TechnicalAnalysis";
import BloombergNewsComponent from "../Blocks/BloombergNews";
import TimelineComponent from "../Blocks/Timeline";
import EconomicCalendarComponent from "../Blocks/EconomicCalendar";
import { defaultSymbols } from "../../app/constants"

const MarketOverviewComponent = dynamic(() => import("../Blocks/MarketOverview.tsx"), {
  ssr: false,
});


const DashBoard: React.FC = () => {
  return (
    <>
      <TickerTape colorTheme="dark" symbols={defaultSymbols}></TickerTape>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <AdvancedRealTimeChartComponent />
        <BloombergNewsComponent />
        <TechnicalAnalysisComponent />
        <MarketOverviewComponent />
        <div className="col-span-12 xl:col-span-8">
          <EconomicCalendarComponent />
        </div>
        <TimelineComponent />
      </div>
    </>
  );
};

export default DashBoard;

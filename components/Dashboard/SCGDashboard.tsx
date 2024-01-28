"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TickerTape } from "react-ts-tradingview-widgets";
import { faker, random, arrayElement } from '@faker-js/faker';

import Header from "@/components/Header/";
import AdvancedRealTimeChartComponent from "@/components/AdvancedRealTimeChart";
import TechnicalAnalysisComponent from "@/components/TechnicalAnalysis";
import BloombergNewsComponent from "@/components/BloombergNews";
import TimelineComponent from "@/components/Timeline";
import EconomicCalendarComponent from "@/components/EconomicCalendar";
import CommoditiesGrid from "@/components/CommoditiesGrid";
import BollingerBandsChart from "@/components/Charts/BollingerBandsChart";
import StockChart from "@/components/Charts/StockChart";
import TreeMapChart from "@/components/Charts/TreeMapChart";
// import HorizontalBoxPlot from "@/components/Charts/HorizontalBoxPlot";

import { defaultSymbols } from "../../app/constants/index";


const MarketOverviewComponent = dynamic(() => import("@/components/MarketOverview.tsx"), {
  ssr: false,
});

const DashBoard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap overflow-hidden bg-black-2">
        <TickerTape theme="dark" symbols={defaultSymbols} />

        <BloombergNewsComponent />
        <StockChart />

        <TechnicalAnalysisComponent />
        <MarketOverviewComponent />
        <TreeMapChart />

{/*         <HorizontalBoxPlot financialData={data}/> */}
{/*         <EconomicCalendarComponent /> */}
        <CommoditiesGrid />
        <TimelineComponent />
        <BollingerBandsChart />
      </div>
    </>
  );
};

export default DashBoard;

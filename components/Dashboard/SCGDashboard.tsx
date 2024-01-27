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
// import TreeMapChart from "@/components/Charts/TreeMapChart";
// import HorizontalBoxPlot from "@/components/Charts/HorizontalBoxPlot";

import { defaultSymbols } from "../../app/constants/index";


const MarketOverviewComponent = dynamic(() => import("@/components/MarketOverview.tsx"), {
  ssr: false,
});

/* const generateRandomFinancialData = (length: number, symbol: string) => {
  const startDate = new Date('2023-01-01');
  const data = [];

  for (let i = 0; i < length; i++) {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    data.push({
      t: currentDate.toISOString(), // Use ISO string for the timestamp
      o: faker.finance.amount({ min: 800, max: 1200, decimal: 2 }), // Opening price
      h: faker.finance.amount({ min: 800, max: 1200, decimal: 2 }), // High price
      l: faker.finance.amount({ min: 700, max: 1100, decimal: 2 }), // Low price
      c: faker.finance.amount({ min: 800, max: 1200, decimal: 2 }), // Closing price
    });
  }

  return {
    label: `${symbol} Stock`,
    data,
    borderColor: faker.internet.color(),
    backgroundColor: faker.internet.color(),
  };
}; */

// const data = generateRandomFinancialData(30, 'GOOL');

const DashBoard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap overflow-hidden bg-black-2">
        <TickerTape theme="dark" symbols={defaultSymbols} />
        <BloombergNewsComponent />
        <AdvancedRealTimeChartComponent />

        <TechnicalAnalysisComponent />
        <MarketOverviewComponent />
        <TechnicalAnalysisComponent />

{/*         <TreeMapChart /> */}
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

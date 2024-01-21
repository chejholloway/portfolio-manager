"use client";
import React from "react";
import dynamic from "next/dynamic";
import { block } from "million/react-server";
import { TickerTape } from "react-ts-tradingview-widgets";

import AdvancedRealTimeChartComponent from "../Blocks/AdvancedRealTimeChart";
import TechnicalAnalysisComponent from "../Blocks/TechnicalAnalysis";
import BloombergNewsComponent from "../Blocks/BloombergNews";
import TimelineComponent from "../Blocks/Timeline";
import EconomicCalendarComponent from "../Blocks/EconomicCalendar";

const MarketOverviewComponent = dynamic(() => import("../Blocks/MarketOverview.tsx"), {
  ssr: false,
});

const defaultSymbols = [{
    "proName": "FOREXCOM:SPXUSD",
    "title": "S&P 500"
  },
  {
    "proName": "FOREXCOM:NSXUSD",
    "title": "US 100"
  },
  {
    "proName": "FX_IDC:EURUSD",
    "title": "EUR to USD"
  },
  {
    "description": "",
    "proName": "NASDAQ:MSFT"
  },
  {
    "description": "SALESFORCE",
    "proName": "NYSE:CRM"
  },
  {
    "description": "NIKE",
    "proName": "NYSE:NKE"
  },
  {
    "description": "DISNEY",
    "proName": "NYSE:DIS"
  },
  {
    "description": "B OF A",
    "proName": "NYSE:BAC"
  },
  {
    "description": "DOW JONES",
    "proName": "BLACKBULL:US30"
  },
  {
    "description": "INTUIT",
    "proName": "NASDAQ:INTU"
  },
  {
    "description": "AMAZON",
    "proName": "NASDAQ:AMZN"
  }
];

const ECommerce: React.FC = () => {
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

const DashBoardBlock = block(ECommerce);

export default DashBoardBlock;

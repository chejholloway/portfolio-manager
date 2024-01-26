"use client";
import { memo } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

import Header from "@/components/Header";
import {
  AdvancedRealTimeChartComponent,
  TimelineComponent,
  EconomicCalendarComponent,
  BloombergNewsComponent,
  TechnicalAnalysisComponent,
  MarketOverviewComponent
} from "../../app/constants/lazy-components"

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

const DashBoard: React.FC = memo(() => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap overflow-hidden bg-black-2">
        <TickerTape theme="dark" symbols={defaultSymbols} />
        <BloombergNewsComponent />
        <AdvancedRealTimeChartComponent />
        <EconomicCalendarComponent />
        <TimelineComponent />
        <TechnicalAnalysisComponent />
        <MarketOverviewComponent />
        <TechnicalAnalysisComponent />
      </div>
    </>
  );
});

export default DashBoard;

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TickerTape } from "react-ts-tradingview-widgets";

import Header from "@/components/Header/";
import TimelineComponent from "@/components/Timeline";
import CommoditiesGrid from "@/components/CommoditiesGrid";
import BollingerBandsChart from "@/components/Charts/BollingerBandsChart";
import StockChart from "@/components/Charts/StockChart";
import TreeMapChart from "@/components/Charts/TreeMapChart";
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
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

        <BoxPlotChart />
        <StockChart />

        <TimelineComponent />
        <MarketOverviewComponent />
        <TreeMapChart />

        <CommoditiesGrid />
        <BollingerBandsChart />

      </div>
    </>
  );
};

export default DashBoard;

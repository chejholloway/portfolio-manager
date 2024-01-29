"use client";
import React from "react";
import dynamic from "next/dynamic";

import Header from "@/components/Header/";
import CommoditiesGrid from "@/components/CommoditiesGrid";
import HCBollingerBandsChart from "@/components/Charts/HCBollingerBandsChart";
import StockChart from "@/components/Charts/StockChart";
import HCTreeMapChart from "@/components/Charts/HCTreeMapChart"
import BoxPlotChart from "@/components/Charts/BoxPlotChart";
import StockTicker from "../Ticker/StockTicker";
import NewsFeed from "../NewsFeed/NewsFeed";

const MarketOverviewComponent = dynamic(() => import("@/components/MarketOverview.tsx"), {
  ssr: false,
});

const DashBoard: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap overflow-hidden bg-black-2">
        <StockTicker />
        <BoxPlotChart />
        <StockChart />
        <HCBollingerBandsChart />
        <MarketOverviewComponent />
        <NewsFeed />
        <CommoditiesGrid />
        <HCTreeMapChart />
      </div>
    </>
  );
};

export default DashBoard;

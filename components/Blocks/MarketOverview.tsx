"use client";
import { memo } from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";
import Title from "../common/Title/";

const MarketOverviewComponent = memo(() => {
  const titleText = "Market Overview";
  return (
    <div className="w-full md:w-1/3">
      <MarketOverview
        colorTheme="dark"
        height={450}
        width="100%"
        showFloatingTooltip />
    </div>
  );
});

export default MarketOverviewComponent;

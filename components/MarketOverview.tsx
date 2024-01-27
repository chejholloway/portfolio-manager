"use client";
import { memo } from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";
import useLoadHandler from '../hooks/useLoadHandler';

const MarketOverviewComponent = memo(() => {
  useLoadHandler("iframe[title='market overview TradingView widget']", (iFrame) => {
    console.log('Market Overview Iframe Loaded:', iFrame);
  });
  return (
    <div className="w-full md:w-1/3 p-4 card">
      <MarketOverview
        colorTheme="dark"
        height={450}
        width="100%"
        showFloatingTooltip />
    </div>
  );
});

export default MarketOverviewComponent;

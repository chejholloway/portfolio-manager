"use client";
import { memo } from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";

const MarketOverviewComponent = memo(() => {
  const titleText = "Market Overview";
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5  pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h5 className="text-xl font-semibold text-black dark:text-primary">
          {titleText}
        </h5>
      </div>

      <div className="mb-2">
        <div className="mx-auto flex justify-center">
          <MarketOverview
            colorTheme="dark"
            height={450}
            width="100%"
            showFloatingTooltip />
        </div>
      </div>
    </div>
  );
});

export default MarketOverviewComponent;

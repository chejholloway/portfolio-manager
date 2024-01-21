"use client";
import React from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";
import { block } from "million/react-server";

const MapOne = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5  pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h5 className="text-xl font-semibold text-black dark:text-primary">
          Market Overview
        </h5>
      </div>

      <div className="mb-2">
        <div className="mx-auto flex justify-center">
          <MarketOverview colorTheme="dark" height={450} width="100%" showFloatingTooltip></MarketOverview>
        </div>
      </div>
    </div>
  );
};

const MarketOverviewBlock = block(MapOne);

export default MarketOverviewBlock;

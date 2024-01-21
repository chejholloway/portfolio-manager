"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const AdvancedRealtimeChartComponent: React.FC = memo(() => {
  const titleText = "Realtime Data";
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-primary">
            {titleText}
          </h4>
        </div>
      </div>
      <div className="pb-8 h-[485px]">
        <AdvancedRealTimeChart theme="dark" autosize />
      </div>
    </div>
  );
});

export default AdvancedRealtimeChartComponent;

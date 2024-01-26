"use client";
import { memo, useEffect } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Title from "../common/Title/"

const AdvancedRealtimeChartComponent: React.FC = memo(() => {
  useEffect(() => {
    const inputElement = document.querySelector("div[class*='inputContainer-'] > input[data-role='search']");

    if (!inputElement) console.info('Input Not found')
  }, []);

  const titleText = "Realtime Data";
  return (
    <div className="w-full md:w-2/3">
      <AdvancedRealTimeChart theme="dark" width="100%" />
    </div>
  );
});

export default AdvancedRealtimeChartComponent;

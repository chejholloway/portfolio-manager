"use client";
import { memo } from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import useLoadHandler from '../hooks/useLoadHandler';
import BollingerBandsChart from "../components/Charts/BollingerBandsChart";

const TechnicalAnalysisComponent: React.FC = memo(() => {
  useLoadHandler("iframe[title='technical analysis TradingView widget']", (iFrame) => {
    console.log('TimeMarket Overview Iframe Loaded:', iFrame);
  });


  return (
    <div className="w-full md:w-1/3 p-4 card">
      <BollingerBandsChart />
    </div>

  );
});

export default TechnicalAnalysisComponent;

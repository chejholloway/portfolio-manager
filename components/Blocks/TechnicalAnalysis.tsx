"use client";
import { memo } from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import Title from "../common/Title/";

const TechnicalAnalysisComponent: React.FC = memo(() => {
  const titleText = "Technical Analysis";

  return (
    <div className="w-full md:w-1/3">
    <TechnicalAnalysis
      colorTheme="dark"
      width="100%"
      symbol="NASDAQ:MSFT" />
    </div>
  );
});

export default TechnicalAnalysisComponent;

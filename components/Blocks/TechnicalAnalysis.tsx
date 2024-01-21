"use client";
import dynamic from "next/dynamic";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const TechnicalAnalysisComponent: React.FC = () => {
  const headerText = "Technical Analysis";

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <h5 className="text-xl font-semibold text-black dark:text-primary">
          {headerText}
        </h5>
      </div>

      <div className="pb-8">
        <TechnicalAnalysis colorTheme="dark" width="100%" symbol="NASDAQ:MSFT"></TechnicalAnalysis>
      </div>
    </div>
  );
};

export default TechnicalAnalysisComponent;

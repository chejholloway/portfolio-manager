import Link from "next/link";
import Image from "next/image";
import { Timeline } from "react-ts-tradingview-widgets";

const TimelineComponent = () => {
  const titleText = "News Feed";
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-primary">
        {titleText}
      </h4>
      <Timeline
        colorTheme="dark"
        feedMode="world-stocks"
        market="news"
        height={400}
        width="100%"/>
    </div>
  );
};

export default TimelineComponent;

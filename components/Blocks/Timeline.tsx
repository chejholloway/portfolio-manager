import { memo } from "react";
import { Timeline } from "react-ts-tradingview-widgets";
import Title from "../common/Title/";

const TimelineComponent = memo(() => {
  const titleText = "News Feed";

  return (
    <div className="w-full md:w-1/3">
      <Timeline
        colorTheme="dark"
        feedMode="world-stocks"
        market="news"
        height={400}
        width="100%"/>
    </div>
  );
});

export default TimelineComponent;

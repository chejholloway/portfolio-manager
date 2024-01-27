import { memo } from "react";
import { Timeline } from "react-ts-tradingview-widgets";
import useLoadHandler from '../hooks/useLoadHandler';

const TimelineComponent = memo(() => {
  useLoadHandler("iframe[title='timeline TradingView widget']", (iFrame) => {
    console.log('News Iframe Loaded:', iFrame);
  });

  return (
    <div className="w-full md:w-1/3 p-4 card">
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

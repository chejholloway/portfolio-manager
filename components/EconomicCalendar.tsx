import { memo } from "react";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import useLoadHandler from '../hooks/useLoadHandler';

const EconomicCalendarComponent = memo(() => {
  useLoadHandler("iframe[title='timeline TradingView widget']", (iFrame) => {
    console.log('Calendar Iframe Loaded:', iFrame);
  });
  return (
    <div className="w-full md:w-2/3 p-4 card">
      <EconomicCalendar
        colorTheme="dark"
        height={400}
        width="100%" />
    </div>
  );
});

export default EconomicCalendarComponent;

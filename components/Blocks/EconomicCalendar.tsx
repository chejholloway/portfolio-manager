import { memo } from "react";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import Title from "../common/Title/";

const EconomicCalendarComponent = memo(() => {
  const titleText = "Economic Calendar";
  return (
    <div className="w-full md:w-2/3">
      <EconomicCalendar
        colorTheme="dark"
        height={400}
        width="100%" />
    </div>
  );
});

export default EconomicCalendarComponent;

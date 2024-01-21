import { BRAND } from "@/types/brand";
import Image from "next/image";
import { EconomicCalendar } from "react-ts-tradingview-widgets";

const EconomicCalendarComponent = () => {
  const titleText = "Economic Calendar";
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-primary">
        {titleText}
      </h4>

      <div className="pb-8">
        <EconomicCalendar colorTheme="dark" height={400} width="100%"></EconomicCalendar>
      </div>
    </div>
  );
};

export default EconomicCalendarComponent;

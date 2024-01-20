import { BRAND } from "@/types/brand";
import Image from "next/image";
import { EconomicCalendar } from "react-ts-tradingview-widgets";

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-8! shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Economic Calendar
      </h4>

      <EconomicCalendar colorTheme="dark" height={400} width="100%"></EconomicCalendar>
    </div>
  );
};

export default TableOne;

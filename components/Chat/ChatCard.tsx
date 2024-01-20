import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";
import { Timeline } from "react-ts-tradingview-widgets";



const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        News Feed
      </h4>

      <Timeline colorTheme="dark" feedMode="market" market="crypto" height={400} width="100%"></Timeline>


    </div>
  );
};

export default ChatCard;

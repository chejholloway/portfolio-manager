import Stock from "./Stock";
import Marquee from "react-fast-marquee";
import SalesForceIcon from "../../app/assets/icon/salesforce.svg";
import SP500Icon from "../../app/assets/icon/s-and-p-500.svg";
import NasdaqIcon from "../../app/assets/icon/nasdaq-100.svg";
import MicrosoftIcon from "../../app/assets/icon/microsoft.svg";
import DisneyIcon from "../../app/assets/icon/walt-disney.svg";
import BofAIcon from "../../app/assets/icon/bank-of-america.svg";
import DowJonesIcon from "../../app/assets/icon/dow-30.svg";
import IntuitIcon from "../../app/assets/icon/intuit.svg";
import AmazonIcon from "../../app/assets/icon/amazon.svg";
import NikeIcon from "../../app/assets/icon/nike.svg";

const StockTicker: React.FC = () => (
  <Marquee>
    <div className="flex py-4 space-x-1 divide-x-2 divide-white">
      <Stock
        proName="FOREXCOM-SPXUSD"
        description="S&P 500"
        price="4885.9"
        color="red"
        icon={SP500Icon}
        change="-5.0 (-0.10%)"
      />

      <Stock
        proName="FOREXCOM:NSXUSD"
        description="US 100"
        price="17391.6"
        color="red"
        icon={NasdaqIcon}
        change="-00.1 (-0.40%)"
      />

      <Stock
        proName="NYSE: CRM"
        description="MICROSOFT"
        price="403.93ᴰ"
        color="red"
        icon={MicrosoftIcon}
        change="-0.94.1 (-0.23%)"
      />

      <Stock
        proName="NYSE: CRM"
        description="SALESFORCE"
        price="279.94ᴰ"
        color="green"
        icon={SalesForceIcon}
        change="+0.91 (+0.33%)"
      />

      <Stock
        proName="NYSE:NKE"
        description="NIKE"
        price="102.75ᴰ"
        color="green"
        icon={NikeIcon}
        change="+1.98 (+1.96%)"
      />

      <Stock
        proName="NYSE:DIS"
        description="DISNEY"
        price="95.36ᴰ"
        color="green"
        icon={DisneyIcon}
        change="+0.50 (+0.53%)"
      />

      <Stock
        proName="NYSE:BAC"
        description="B of A"
        price="33.43ᴰ"
        color="green"
        icon={BofAIcon}
        change="+0.04 (+0.12%)"
      />

      <Stock
        proName="BLACKBULL:US30"
        description="DOW JONES"
        price="38096.30"
        color="green"
        icon={DowJonesIcon}
        change="+85.91 (+0.23%)"
      />

      <Stock
        proName="NASDAQ:INTU"
        description="INTUIT"
        price="641.36ᴰ"
        color="red"
        icon={IntuitIcon}
        change="-0.13 (-0.13%)"
      />

      <Stock
        proName="NASDAQ:AMZN"
        description="AMAZON"
        price="159.12"
        color="green"
        icon={AmazonIcon}
        change="+1.37 (+0.87%)"
      />
    </div>
  </Marquee>
);

export default StockTicker;

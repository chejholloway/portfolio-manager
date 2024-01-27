// Assuming this component is in a Next.js project
import { memo } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import useLoadHandler from '../hooks/useLoadHandler';

const AdvancedRealtimeChartComponent: React.FC = memo(() => {

  useLoadHandler("iframe[title='events TradingView widget']", (iFrame) => {
    console.log('Advanced Realtime Iframe Loaded:', iFrame);
  });
  return (
    <div className="w-full md:w-2/3 p-4 card">
      <AdvancedRealTimeChart theme="dark" width="100%" />
    </div>
  );
});

export default AdvancedRealtimeChartComponent;

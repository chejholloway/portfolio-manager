import dynamic from "next/dynamic";

export const AdvancedRealTimeChartComponent = dynamic(() => import("../../components/Blocks/AdvancedRealTimeChart"), {
  ssr: false,
});

export const TimelineComponent = dynamic(() => import("../../components/Blocks/Timeline"), {
  ssr: false,
});

export const EconomicCalendarComponent = dynamic(() => import("../../components/Blocks/EconomicCalendar"), {
  ssr: false,
});

export const BloombergNewsComponent = dynamic(() => import("../../components/Blocks/BloombergNews"), {
  ssr: false,
});

export const TechnicalAnalysisComponent = dynamic(() => import("../../components/Blocks/TechnicalAnalysis"), {
  ssr: false,
});

export const MarketOverviewComponent = dynamic(() => import("../../components/Blocks/MarketOverview"), {
  ssr: false,
});
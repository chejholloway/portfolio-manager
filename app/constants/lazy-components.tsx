import dynamic from "next/dynamic";

export const AdvancedRealTimeChartComponent = dynamic(() => import("../../components/AdvancedRealTimeChart"), {
  ssr: false,
});

export const TimelineComponent = dynamic(() => import("../../components/Timeline"), {
  ssr: false,
});

export const EconomicCalendarComponent = dynamic(() => import("../../components/EconomicCalendar"), {
  ssr: false,
});

export const BloombergNewsComponent = dynamic(() => import("../../components/BloombergNews"), {
  ssr: false,
});

export const TechnicalAnalysisComponent = dynamic(() => import("../../components/TechnicalAnalysis"), {
  ssr: false,
});

export const MarketOverviewComponent = dynamic(() => import("../../components/MarketOverview"), {
  ssr: false,
});
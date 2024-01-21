"use client"
import DashBoardBlock from "@/components/Dashboard/SCGDashboard";
import { TradingViewProvider } from "../utils/TradingViewContext";

export default function Home() {
  return (
    <TradingViewProvider>
      <DashBoardBlock />
    </TradingViewProvider>
  );
}

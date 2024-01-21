"use client"
import DashBoard from "@/components/Dashboard/SCGDashboard";
import { TradingViewProvider } from "../utils/TradingViewContext";

export default function Home() {
  return (
    <TradingViewProvider>
      <DashBoard />
    </TradingViewProvider>
  );
}
